import React, { InputHTMLAttributes } from "react";
import Icon from "@material-ui/core/Icon";
import { Field, useField } from "formik";
import { InputLabel, makeStyles } from "@material-ui/core";
import { Offer } from "../../generated/graphql";

interface Props {
  offer: Offer;
}

const useStyles = makeStyles((theme) => ({
  input: {
    width: "100%",
    display: "flex",
    marginLeft: "-2.5rem",
    paddingLeft: "2.5rem",
    paddingRight: "0.75rem",
    paddingTop: "0.5rem",
    borderRadius: "0.5rem",
    borderWidth: "1px",
    alignItems: "center",
    outline: "2px solid transparent",
    outlineOffset: "2px",
    borderColor: "#444",
    borderStyle: "solid",
    height: "40px",
  },
  PositionIcon: {
    width: "2.5rem",
    zIndex: 10,
    paddingLeft: "0.25rem",
    textAlign: "center",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function OfferCard(props: Props) {
  const classes = useStyles();
  return (
    <div>
      <p>{props.offer.title}</p>
    </div>
  );
}

export default OfferCard;
