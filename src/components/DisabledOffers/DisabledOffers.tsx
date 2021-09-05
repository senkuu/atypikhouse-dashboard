import { Offer, useMeQuery, useOffersQuery } from "../../generated/graphql";
import OfferCard from "../OfferCard";

export default function DisabledOffers() {
  const { data: userMe } = useMeQuery();
  const { data, loading } = useOffersQuery({
    variables: {
      cityId: 75056,
      getCities: true,
      getDepartements: true,
      status: "DISABLED",
    },
  });

  if (userMe?.me?.userType === "certifiedOwner") {
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
      {data!.offers.offers.map((offer, index) => (
        <div key={index}>
          <OfferCard WithOut={true} offer={offer as Offer} />
        </div>
      ))}
    </div>
  );
}
