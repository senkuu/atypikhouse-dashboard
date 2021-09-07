import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import InputField from "../InputField";
import { Formik, Form, Field } from "formik";
import {
  useCreateCriteriaMutation,
  useCriteriasQuery,
  useDeleteCriteriaMutation,
  useMeQuery,
} from "../../generated/graphql";
import { InputLabel } from "@material-ui/core";
import { useApolloClient } from "@apollo/client";

interface Values {
  name: string;
  additional: string;
  isGlobal: boolean;
  criteriaType: string;
}
interface Crit {
  id: number;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    background: "white",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    overflowX: "hidden",
    overflowY: "auto",
    width: "100%",
    height: "60%",
    zIndex: 50,
    margin: "auto",
    padding: "70px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "#2B463C",
    color: "white",
  },
}));

export default function CreateCriteria() {
  const classes = useStyles();
  const apolloClient = useApolloClient();
  const { data: userMe } = useMeQuery();
  const { data: criteria } = useCriteriasQuery();
  const [createCriteria] = useCreateCriteriaMutation();
  const [deleteCriteria] = useDeleteCriteriaMutation();

  const handleFormSubmit = async (values: Values) => {
    await createCriteria({ variables: values });
    apolloClient.resetStore();
    console.log(values);
  };
  const deleteCrit = async (values: Crit) => {
    await deleteCriteria({ variables: values });
    apolloClient.resetStore();
    console.log(values);
  };

  if (userMe?.me?.userType === "certifiedOwner") {
    return <p>Vous ne pouvez pas accéder à cette page.</p>;
  }

  return (
    <Container maxWidth="md">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" style={{ fontFamily: "Lora" }}>
          Création un critère :
        </Typography>
        <Formik
          initialValues={{
            name: "",
            additional: "",
            isGlobal: false,
            criteriaType: "int",
          }}
          onSubmit={handleFormSubmit}
        >
          {({ isSubmitting }) => (
            <Form style={{ marginTop: "20px" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <InputField
                    icon="title"
                    label="Value"
                    name="name"
                    type="text"
                    placeholder="Chambre, piscine, plage à ..."
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputField
                    icon="playlist_add"
                    label="additional"
                    name="additional"
                    type="text"
                    placeholder="mètres, km ..."
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <InputLabel
                    htmlFor="isGlobal"
                    style={{
                      fontSize: "12px",
                    }}
                  >
                    ce critère s'applique à toutes les offres ?
                  </InputLabel>
                  <Field type="checkbox" name="isGlobal" />
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <InputLabel
                    htmlFor="criteriaType"
                    style={{
                      marginRight: "10px",
                      marginTop: "15px",
                      fontSize: "12px",
                    }}
                  >
                    Type du critère (texte, nombre ou boolean) :
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
                      borderColor: "#222",
                      borderStyle: "solid",
                      height: "40px",
                    }}
                    name="criteriaType"
                    as="select"
                    required
                  >
                    <option value="int">Nombre</option>
                    <option value="boolean">Boolean</option>
                    <option value="string">Texte</option>
                  </Field>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
              >
                Créer
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      {criteria?.criterias?.map((criteria, index) => (
        <div
          style={{
            marginTop: "10px",
            padding: "10px",
            boxShadow: "0px 2px 5px 0px #888",
          }}
          key={index}
        >
          <p>ID critère : {criteria.id}</p>
          <p>Nom : {criteria.name}</p>
          <button
            style={{ border: "none", background: "red", color: "white" }}
            onClick={() =>
              deleteCrit({
                id: criteria.id,
              })
            }
          >
            Supprimer le critère
          </button>
        </div>
      ))}
    </Container>
  );
}
