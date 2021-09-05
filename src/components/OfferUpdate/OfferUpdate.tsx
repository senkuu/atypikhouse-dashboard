import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useLocation } from "react-router-dom";
import {
  useMeQuery,
  useOfferQuery,
  useUpdateOfferMutation,
} from "../../generated/graphql";
import { Formik, Form, Field } from "formik";
import InputField from "../InputField";
import { InputLabel } from "@material-ui/core";
import { useState } from "react";

interface Values {
  id: number;
  status: string;
  deleteReason: string;
  priceTTC: number;
  description: string;
  title: string;
  longitude: number;
  latitude: number;
  touristTax: number;
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
  },
}));

export default function OfferUpdate() {
  const classes = useStyles();

  const location = useLocation();
  const getLocation = location.pathname.split("updateOffer/")[1];
  const ID: number = parseInt(getLocation);

  const { data: userMe } = useMeQuery();
  const { data, loading: meLoading } = useOfferQuery({
    variables: {
      id: ID,
    },
  });

  const [updateOffer] = useUpdateOfferMutation();

  const [changed, isChanged] = useState(false);

  if (userMe?.me?.userType === "owner") {
    return <p>Vous ne pouvez pas accéder à cette page.</p>;
  }
  if (data === undefined || data === null) {
    console.log("vide");
  }

  if (data?.offer?.id === ID && null) {
    return <p>desole existe pas</p>;
  }

  const handleFormSubmit = async (values: Values) => {
    const response = await updateOffer({ variables: values });
  };

  let body = null;

  if (meLoading) {
  } else if (!data?.offer) {
    body = (
      <>
        <p>L'ID de l'offre n'existe pas</p>
      </>
    );
  } else {
    body = (
      <>
        <Container maxWidth="md">
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Modifier annonce "{data.offer.title}"
            </Typography>
            <Formik
              initialValues={{
                id: data!.offer!.id,
                deleteReason: data?.offer?.deleteReason,
                priceTTC: data?.offer?.priceTTC,
                description: data?.offer?.description,
                title: data?.offer?.title,
                status: data?.offer?.status,
                address: data?.offer?.address,
                latitude: 48.862725,
                longitude: 2.287592,
                touristTax: data?.offer?.touristTax,
              }}
              onSubmit={handleFormSubmit}
            >
              {({ isSubmitting }) => (
                <Form style={{ marginTop: "20px" }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <InputField
                        icon="title"
                        label="Nom"
                        name="title"
                        type="text"
                        placeholder={data?.offer?.title}
                        required
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Field
                        style={{
                          maxWidth: "800px",
                          width: "100%",
                          display: "flex",
                          paddingLeft: "0.5rem",
                          paddingRight: "0.75rem",
                          borderRadius: "0.5rem",
                          borderWidth: "1px",
                          outline: "2px solid transparent",
                          outlineOffset: "2px",
                          borderColor: "#222",
                          borderStyle: "solid",
                          height: "80px",
                        }}
                        name="description"
                        placeholder={data?.offer?.description}
                        as="textarea"
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
                        <option value="AVAILABLE">Available</option>
                        <option value="DISABLED">Disabled</option>
                      </Field>
                    </Grid>
                    <Grid item xs={12}>
                      <InputField
                        icon="euro"
                        label="Prix TTC"
                        name="priceTTC"
                        type="number"
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <InputField
                        icon="account_balance"
                        label="Prix Taxe de séjour en EURO"
                        name="touristTax"
                        type="number"
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <InputField
                        icon="home"
                        label="Modifier l'adresse..."
                        name="address"
                        placeholder={data?.offer?.address || ""}
                        type="text"
                        required
                      />
                    </Grid>
                  </Grid>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                    onClick={() => isChanged(true)}
                  >
                    Modifier votre annonce
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
