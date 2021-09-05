import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useLocation } from "react-router-dom";
import {
  useMeQuery,
  useUpdateUserMutation,
  useUserQuery,
} from "../../generated/graphql";
import { Formik, Form, Field } from "formik";
import InputField from "../InputField";
import { InputLabel } from "@material-ui/core";
import { useApolloClient } from "@apollo/client";
import { useState } from "react";

interface Values {
  id: number;
  website: string;
  description: string;
  name: string;
  surname: string;
  email: string;
  status: string;
  //   city: string;
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

export default function UserUpdate() {
  // get user id from pathname.
  const classes = useStyles();

  const apolloClient = useApolloClient();
  const [changed, isChanged] = useState(false);

  const location = useLocation();
  const getLocation = location.pathname.split("update/")[1];
  const ID: number = parseInt(getLocation);
  console.log(ID);
  const { data, loading: meLoading } = useUserQuery({
    variables: {
      id: ID,
    },
  });

  // const [found, setFound] = useState(false);

  //Update user information from formik
  const [updateUser] = useUpdateUserMutation();

  //check if userType have access
  const { data: userMe } = useMeQuery();
  if (userMe?.me?.userType === "certifiedOwner") {
    return <p>Vous ne pouvez pas accéder à cette page.</p>;
  }
  if (data === undefined || data === null) {
    return <p>page non disponible, Veuillez préciser un ID utilisateur </p>;
  }

  if (data?.user?.id === ID && null) {
    return <p>desole existe pas</p>;
  }

  // Check if url already
  const checkURL = () => {
    let website = "";
    if (data?.user?.website === undefined) {
      return website;
    } else if (data?.user?.website === null) {
      return website;
    } else {
      let userWebsite: string = data?.user?.website;
      return userWebsite;
    }
  };

  // Check if description already exist in user profile
  const checkDescription = () => {
    let desc = "";
    if (data?.user?.description === undefined) {
      return desc;
    } else if (data?.user?.description === null) {
      return desc;
    } else {
      let userDescription: string = data?.user?.description;
      return userDescription;
    }
  };

  const handleFormSubmit = async (values: Values) => {
    const response = await updateUser({ variables: values });
    apolloClient.resetStore();
  };

  let body = null;

  if (meLoading) {
  } else if (!data?.user) {
    body = (
      <>
        <p>L'ID de l'utilisateur n'existe pas</p>
      </>
    );
  } else {
    body = (
      <>
        <Container maxWidth="md">
          <div className={classes.paper}>
            <Typography
              component="h1"
              variant="h5"
              style={{ fontFamily: "Lora", marginBottom: "10px" }}
            >
              Modifier profil utilisateur
            </Typography>
            <Formik
              initialValues={{
                id: data!.user!.id,
                website: checkURL(),
                description: checkDescription(),
                name: data!.user!.name,
                surname: data!.user!.surname,
                email: data!.user!.email,
                status: data!.user.status,
                // city: "",
              }}
              onSubmit={handleFormSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <InputField
                        icon="http"
                        label="Site web"
                        name="website"
                        type="text"
                        placeholder="nomdedomaine.com"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputField
                        icon="subject"
                        label="A propos de vous"
                        name="description"
                        type="text"
                        placeholder="Raconter nous comment vous êtes unique."
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <InputField
                        icon="person"
                        label="Nom"
                        name="name"
                        type="text"
                        placeholder={data?.user?.name}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <InputField
                        icon="person"
                        label="Prenom"
                        name="surname"
                        type="text"
                        placeholder={data?.user?.surname}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <InputField
                        icon="alternate_email"
                        label="Email"
                        name="email"
                        type="email"
                        placeholder={data?.user?.email}
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
                        name="status"
                        as="select"
                        required
                      >
                        <option value="activated">activated</option>
                        <option value="activationPending">
                          activationPending
                        </option>
                        <option value="closed">closed</option>
                      </Field>
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                    onClick={() => isChanged(true)}
                  >
                    Modifier
                  </Button>
                  {changed ? (
                    <p style={{ textAlign: "center", color: "green" }}>
                      modification prise en compte
                    </p>
                  ) : (
                    <p></p>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </Container>
      </>
    );
  }

  return body;
}
