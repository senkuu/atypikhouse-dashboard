import { makeStyles } from "@material-ui/core/styles";
import { Offer, useMeQuery, useOffersQuery } from "../../generated/graphql";
import OfferCard from "../OfferCard";

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

export default function OwnerOffers() {
  const classes = useStyles();
  const { data: userMe } = useMeQuery();
  const { data, loading, error } = useOffersQuery({
    variables: {
      cityId: 75056,
      getCities: true,
      getDepartements: true,
      ownerId: userMe!.me!.id,
    },
  });

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
    <div>
      {data!.offers.map((offer, index) => (
        <div key={index}>
          <OfferCard WithOut={false} offer={offer as Offer} />
        </div>
      ))}
    </div>
  );
}