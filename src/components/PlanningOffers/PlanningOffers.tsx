import { useApolloClient } from "@apollo/client";
import { Button, Grid } from "@material-ui/core";
import { Form, Formik } from "formik";
import {
  useAddPlanningDataMutation,
  useMeQuery,
  usePlanningsQuery,
} from "../../generated/graphql";
import InputField from "../InputField";

interface Values {
  startDate: string;
  endDate: string;
  ownerId: number;
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
  const apolloClient = useApolloClient();
  const { data: userMe } = useMeQuery();
  const { data, loading } = usePlanningsQuery({
    variables: {
      ownerId: userMe?.me?.id,
    },
  });
  const handleFormSubmit = async (values: Values) => {
    const response = await planningOffers({ variables: values });

    console.log(values);
  };

  return (
    <>
      <Formik
        initialValues={{
          startDate: new Date().toISOString().split("T")[0],
          endDate: "",
          ownerId: userMe!.me!.id,
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
    </>
  );
}
