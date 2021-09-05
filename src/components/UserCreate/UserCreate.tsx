import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import InputField from "../InputField";
import { Formik, Form, Field } from "formik";
import { useMeQuery, useRegisterMutation } from "../../generated/graphql";
import { InputLabel } from "@material-ui/core";
interface Values {
  name: string;
  surname: string;
  email: string;
  password: string;
  userType: string;
  status: string;
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

export default function UserCreate() {
  const classes = useStyles();

  const [register] = useRegisterMutation();
  const { data: userMe } = useMeQuery();

  const handleFormSubmit = async (values: Values) => {
    const response = await register({ variables: values });

    // apolloClient.resetStore();
    // console.log(values)
    if (response === null) {
      console.log("ça marche pas");
    }

    console.log("un espoir");
  };

  if (userMe?.me?.userType === "certifiedOwner") {
    return <p>Vous ne pouvez pas accéder à cette page.</p>;
  }

  return (
    <Container maxWidth="md">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" style={{ fontFamily: "Lora" }}>
          Création de compte :
        </Typography>
        <Formik
          initialValues={{
            name: "",
            surname: "",
            email: "",
            password: "",
            userType: "",
            status: "activated",
          }}
          onSubmit={handleFormSubmit}
        >
          {({ isSubmitting }) => (
            <Form style={{ marginTop: "20px" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <InputField
                    icon="person"
                    label="Nom"
                    name="name"
                    type="text"
                    placeholder="Dupont"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputField
                    icon="person"
                    label="Prénom"
                    name="surname"
                    type="text"
                    placeholder="Dupont"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    icon="alternate_email"
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="dupont@gmail.com"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    icon="lock"
                    label="Mot de passe"
                    name="password"
                    type="password"
                    placeholder="********"
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
                    Type d'utilisateur
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
                    name="userType"
                    as="select"
                    required
                  >
                    <option value="default">default</option>
                    <option value="owner">owner</option>
                    <option value="admin">admin</option>
                    <option value="moderator">moderator</option>
                    <option value="technical">technical</option>
                    <option value="certifiedOwner">certifiedOwner</option>
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
    </Container>
  );
}
