import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Offer, useMeQuery, useOffersQuery } from "../../generated/graphql";
import OfferCard from "../OfferCard";

export default function OwnerOffers() {
  const { data: userMe } = useMeQuery();
  const { data, loading } = useOffersQuery({
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link
          to="/PlanningOffers"
          style={{
            width: "40%",
            background: "#2B463C",
            color: "white",
            textDecoration: "none",
          }}
        >
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{
              background: "#2B463C",
              color: "white",
            }}
          >
            Ajouter des dates d'indisponiblité pour vos offres
          </Button>
        </Link>
        {/* <Link
          to="/PlanningOffer"
          style={{
            marginLeft: "50px",
            width: "40%",
            background: "white",
            color: "#2B463C",
            textDecoration: "none",
          }}
        >
          <Button type="submit" fullWidth variant="contained">
            Ajouter des dates d'indisponiblités pour une offre
          </Button>
        </Link> */}
      </div>
      {data!.offers.offers.map((offer, index) => (
        <div key={index}>
          <OfferCard WithOut={false} offer={offer as Offer} />
        </div>
      ))}
    </div>
  );
}
