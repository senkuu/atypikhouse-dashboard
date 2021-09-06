import { useApolloClient } from "@apollo/client";
import { Button, Grid } from "@material-ui/core";
import { Form, Formik } from "formik";
import {
  useAddPlanningDataMutation,
  useMeQuery,
  usePlanningsQuery,
  useRemovePlanningDataMutation,
} from "../../generated/graphql";
import InputField from "../InputField";

interface Values {
  startDate: string;
  endDate: string;
  ownerId: number;
  id: number;
}

export default function PlanningOffers() {
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
  const [removePlanning] = useRemovePlanningDataMutation();

  const apolloClient = useApolloClient();
  const { data: userMe } = useMeQuery();
  const { data, loading } = usePlanningsQuery({
    variables: {
      ownerId: userMe?.me?.id,
    },
  });
  const handleFormSubmit = async (values: Values) => {
    const response = await planningOffers({ variables: values });
    apolloClient.resetStore();
    console.log(values);
  };

  const PlanningArchived = (values: Values) => {
    removePlanning({ variables: values });
    apolloClient.resetStore();
    return alert("offre archivé avec succès ");
  };

  return (
    <>
      <Formik
        initialValues={{
          startDate: new Date().toISOString().split("T")[0],
          endDate: "",
          ownerId: userMe!.me!.id,
          id: 0,
        }}
        onSubmit={handleFormSubmit}
      >
        {({ isSubmitting, values }) => (
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
              <Button type="submit" fullWidth variant="contained">
                Ajouter
              </Button>
            </Grid>
          </Form>
        )}
      </Formik>
      <h2 style={{ padding: "15px" }}>
        Date d'indisponiblités concernant toutes vos offres :
      </h2>
      {data?.plannings?.map((planning, index) => (
        <div key={index} style={{ padding: "10px" }}>
          <p>Date de début : {planning.startDate.split("T")[0]}</p>
          <p>Date de fin : {planning.endDate.split("T")[0]}</p>
          <button
            onClick={() =>
              PlanningArchived({
                ownerId: userMe!.me!.id,
                id: planning.id,
                endDate: planning.endDate,
                startDate: planning.startDate,
              })
            }
          >
            Archivé ces dates
          </button>
        </div>
      ))}
    </>
  );
}
