import React from "react";
import clsx from "clsx";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  LocalOffer,
  Publish,
  Group,
  AccessTime,
  CheckCircle,
  Cancel,
  WatchLater,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import {
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
} from "../../generated/graphql";
import { Button } from "@material-ui/core";
import { useApolloClient } from "@apollo/client";
import { Formik, Form } from "formik";
import InputField from "../InputField";

interface props {
  children: React.ReactNode;
}

interface Values {
  email: string;
  password: string;
}
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      background: "#688F4E",
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      background: "#2B463C",
      color: "white",
    },
    form: {
      display: "block",
      width: "50%",
      background: "white",
      margin: "auto",
    },
  })
);

export default function Sidebar(props: props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { data, loading: meLoading } = useMeQuery();

  const [login] = useLoginMutation();
  const [logout] = useLogoutMutation();
  const apolloClient = useApolloClient();

  let body = null;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = async (values: Values) => {
    const response = await login({ variables: values });

    apolloClient.resetStore();
  };

  if (meLoading) {
  } else if (!data?.me) {
    body = (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={handleFormSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={classes.form}>
              <InputField
                icon="alternate_email"
                label="email"
                name="email"
                type="email"
                placeholder="Dupont.joe@gmail.com"
                required
              />
              <InputField
                icon="https"
                label="Mot de passe"
                name="password"
                type="password"
                placeholder="********"
                required
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    );
  } else {
    body = (
      <>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Dashboard {data.me.userType}
              </Typography>
              <Button
                variant="contained"
                style={{
                  margin: "10px",
                  background: "#2B463C",
                  color: "white",
                  outline: "0px",
                }}
                onClick={() => {
                  logout();
                  apolloClient.resetStore();
                }}
              >
                Déconnexion
              </Button>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </div>
            <Divider />

            <List>
              <Link
                to="/publish"
                style={{ textDecoration: "none", color: "#222" }}
              >
                <ListItem>
                  <ListItemIcon>
                    <Publish />
                  </ListItemIcon>
                  <ListItemText>Déposer une annonce</ListItemText>
                </ListItem>
              </Link>
              <Link
                to="/offers"
                style={{ textDecoration: "none", color: "#222" }}
              >
                <ListItem>
                  <ListItemIcon>
                    <LocalOffer />
                  </ListItemIcon>
                  <ListItemText>Vos offres</ListItemText>
                </ListItem>
              </Link>
            </List>
            <Divider />
            {data.me.userType === "admin" ? (
              <List>
                <Link
                  to="/users"
                  style={{ textDecoration: "none", color: "#222" }}
                >
                  <ListItem>
                    <ListItemIcon>
                      <Group />
                    </ListItemIcon>
                    <ListItemText>Les utilisateurs</ListItemText>
                  </ListItem>
                </Link>
                <Link
                  to="/offers_available"
                  style={{ textDecoration: "none", color: "#222" }}
                >
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle />
                    </ListItemIcon>
                    <ListItemText>Les offres validées</ListItemText>
                  </ListItem>
                </Link>
                <Link
                  to="/offers_waiting_approval"
                  style={{ textDecoration: "none", color: "#222" }}
                >
                  <ListItem>
                    <ListItemIcon>
                      <AccessTime />
                    </ListItemIcon>
                    <ListItemText>Les offres en attente</ListItemText>
                  </ListItem>
                </Link>
                <Link
                  to="/offers_disabled"
                  style={{ textDecoration: "none", color: "#222" }}
                >
                  <ListItem>
                    <ListItemIcon>
                      <Cancel />
                    </ListItemIcon>
                    <ListItemText>Les offres archivées</ListItemText>
                  </ListItem>
                </Link>
                <Link
                  to="/activationPending"
                  style={{ textDecoration: "none", color: "#222" }}
                >
                  <ListItem>
                    <ListItemIcon>
                      <WatchLater />
                    </ListItemIcon>
                    <ListItemText>Utilisateurs en attente</ListItemText>
                  </ListItem>
                </Link>
              </List>
            ) : (
              <></>
            )}
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <div>{props.children}</div>
          </main>
        </div>
      </>
    );
  }

  return body;
}
