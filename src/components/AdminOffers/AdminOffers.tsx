import { Offer, useMeQuery, useOffersQuery } from "../../generated/graphql";
import OfferCard from "../OfferCard";

export default function AdminOffers() {
  const { data: userMe } = useMeQuery();
  const { data, loading, error } = useOffersQuery({
    variables: {
      cityId: 75056,
      getCities: true,
      getDepartements: true,
      status: "AVAILABLE",
    },
  });

  if (userMe?.me?.userType === ("owner" || "default")) {
    return <p>Vous ne pouvez pas accéder à cette page.</p>;
  }

  if (!data && loading) {
    return <p>Chargement de toutes les offres disponibles</p>;
  }

  if (data) {
    console.log(data.offers);
  }

  if (data === undefined) console.log(data);

  return (
    <div>
      {data!.offers.map((offer, index) => (
        <div key={index}>
          <OfferCard WithOut={true} offer={offer as Offer} />
        </div>
      ))}
    </div>
  );
}
