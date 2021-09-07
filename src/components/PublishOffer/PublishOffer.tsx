import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import InputField from "../InputField";
import { Formik, Form, Field } from "formik";
import { useCreateOfferMutation, useMeQuery } from "../../generated/graphql";
import { useApolloClient } from "@apollo/client";

interface Values {
  status: string;
  deleteReason: string;
  offerTypeId: number;
  ownerId: number;
  cityId: number;
  priceHT: number;
  priceTTC: number;
  touristTax: number;
  description: string;
  title: string;
  address: string;
  longitude: number;
  latitude: number;
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

export default function PublishOffer() {
  const classes = useStyles();
  const [createOffer] = useCreateOfferMutation();
  const { data: userMe } = useMeQuery();
  const apolloClient = useApolloClient();

  const handleFormSubmit = async (values: Values) => {
    const response = await createOffer({ variables: values });

    if (response === null) {
      return (
        <p>
          Une erreur est survenue, veuillez réessayer plus tard ou contacter
          notre service.
        </p>
      );
    }
    apolloClient.resetStore();
  };

  if (userMe?.me?.userType === "owner") {
    return <p>Vous ne pouvez pas accéder à cette page.</p>;
  }

  return (
    <Container maxWidth="md">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Déposer votre annonce :
        </Typography>
        <Formik
          initialValues={{
            deleteReason: "UNKNOWN",
            offerTypeId: 1,
            ownerId: userMe!.me!.id,
            cityId: 0,
            priceHT: 0,
            priceTTC: 0,
            touristTax: 0,
            description: "",
            title: "",
            status: "WAITING_APPROVAL",
            address: "",
            latitude: 48.862725,
            longitude: 2.287592,
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
                    placeholder="Titre de l'annonce"
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
                      borderColor: "#bdc3c7",
                      borderStyle: "solid",
                      height: "80px",
                      fontFamily: "Lato",
                      padding: "10px",
                    }}
                    name="description"
                    placeholder="Description de l'annonce"
                    as="textarea"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    icon="home"
                    label="Adresse de votre annonce :"
                    name="address"
                    type="text"
                    placeholder="18 rue/chemin..."
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    icon="location_city"
                    label="Code INSEE :"
                    name="cityId"
                    type="number"
                    placeholder="ex: 75056 pour PARIS"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    icon="euro"
                    label="Prix HT"
                    name="priceHT"
                    type="number"
                    required
                  />
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
                    label="Prix taxe de séjour en EURO"
                    name="touristTax"
                    type="number"
                    required
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
              >
                Déposer votre annonce
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
}
