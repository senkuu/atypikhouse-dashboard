import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Avatar from "@material-ui/core/Avatar";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core";
import { Offer } from "../../generated/graphql";
import { Link } from "react-router-dom";

interface Props {
  offer: Offer;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(2),
    width: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    boxShadow: "none"
  },
  edit: {
    textDecoration: "none",
    color: "#2B463C",
    background: "#f1c40f",
    marginRight: "10px",
  },
  del: {
    textDecoration: "none",
    color: "#2B463C",
    background: "#e74c3c",
  },
}));

function OfferCard(props: Props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="lg">
        <Paper className={classes.paper}>
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography
                component="h2"
                variant="h6"
                style={{ color: "#222" }}
                gutterBottom
              >
                {props.offer.title}
              </Typography>
            </Box>
            <Box>
              <Link to="/create" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  style={{
                    margin: "10px",
                    background: "#2B463C",
                    color: "white",
                    outline: "0px",
                  }}
                >
                  Ajouter
                </Button>
              </Link>
            </Box>
          </Box>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">ID</TableCell>
                  <TableCell align="center" style={{width: '20%'}}>title</TableCell>
                  <TableCell align="left">priceTTC</TableCell>
                  <TableCell align="left">Taxe de séjour</TableCell>
                  <TableCell align="left">status </TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                    <TableRow key={props.offer.id}>
                      <TableCell align="right">{props.offer.id}</TableCell>
                      <TableCell align="center">{props.offer.title}</TableCell>
                      <TableCell align="left">{props.offer.priceTTC}</TableCell>
                      <TableCell align="left">{props.offer.touristTax}</TableCell>
                      <TableCell align="left">{props.offer.status}</TableCell>
                      <TableCell align="center">
                        <ButtonGroup
                          color="primary"
                          aria-label="outlined primary button group"
                        >
                          <Link
                            to={`update/${props.offer.id}`}
                            className={classes.edit}
                          >
                            <Button>Modifier</Button>
                          </Link>
                          <Link to="/users" className={classes.del}>
                            <Button
                              // onClick={() =>
                              //   UserArchived({ id: users.id, status: "closed" })
                              // }
                            >
                              Archivé
                            </Button>
                          </Link>
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </div>
  );
}

export default OfferCard;
