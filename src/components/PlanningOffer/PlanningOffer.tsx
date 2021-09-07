import { Button, Grid, InputLabel } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import {
  useAddPlanningDataMutation,
  useMeQuery,
  useOffersQuery,
} from "../../generated/graphql";
import InputField from "../InputField";

interface Values {
  startDate: string;
  endDate: string;
  offerId: number;
}

export default function PlanningOffer() {
  function setMinDepartDate(startDateValue: string) {
    let minDate: Date;

    if (startDateValue !== "") {
      minDate = new Date(startDateValue);
    } else {
      minDate = new Date();
    }
    minDate.setDate(minDate.getDate() + 1);
    return minDate.toISOString().split("T")[0];
  }

  const [planningOffers] = useAddPlanningDataMutation();
  const { data: userMe, loading } = useMeQuery();
  const { data } = useOffersQuery({
    variables: {
      cityId: 75056,
      getCities: true,
      getDepartements: true,
      ownerId: userMe!.me!.id,
    },
  });

  const handleFormSubmit = async (values: Values) => {
    await planningOffers({ variables: values });

    console.log(values);
  };

  if (userMe?.me?.userType === ("owner" || "default")) {
    return <p>Vous ne pouvez pas accéder à cette page.</p>;
  }

  if (!data && loading) {
    return <p>Chargement de la totalité des offres</p>;
  }

  if (data) {
    console.log(data.offers);
  }

  if (data === undefined) {
  }

  return (
    <>
      <Formik
        initialValues={{
          startDate: new Date().toISOString().split("T")[0],
          endDate: "",
          offerId: 0,
        }}
        onSubmit={handleFormSubmit}
      >
        {({ values }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <InputField
                  icon="explore"
                  label="arrive"
                  type="date"
                  placeholder="Quand ? "
                  min={new Date().toISOString().split("T")[0]}
                  name="startDate"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputField
                  icon="explore_off"
                  label="depart"
                  name="endDate"
                  type="date"
                  placeholder="Quand ?"
                  min={setMinDepartDate(values.startDate)}
                  required
                />
              </Grid>
              <Grid
                item
                xs={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <InputLabel
                  htmlFor="userType"
                  style={{
                    marginRight: "10px",
                    marginTop: "15px",
                    fontSize: "12px",
                  }}
                >
                  Statut de l'offre :
                </InputLabel>
                <Field
                  style={{
                    width: "50%",
                    display: "flex",
                    paddingLeft: "0.5rem",
                    paddingRight: "0.75rem",
                    borderRadius: "0.5rem",
                    borderWidth: "2px",
                    outline: "2px solid transparent",
                    outlineOffset: "2px",
                    borderColor: "#bdc3c7",
                    borderStyle: "solid",
                    height: "40px",
                    fontFamily: "Lato",
                  }}
                  name="offerId"
                  as="select"
                  required
                >
                  {data!.offers.offers.map((offer, index) => (
                    <option key={index} value={offer.id}>
                      {offer.title}
                    </option>
                  ))}
                </Field>
              </Grid>
              <Button type="submit" fullWidth variant="contained">
                Ajouter
              </Button>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
}
