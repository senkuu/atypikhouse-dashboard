import React  from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {Link} from "react-router-dom";

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
    marginLeft: '100px', 
    width: '90%'
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,

  },
  edit: {
      textDecoration: 'none',
      color: '#2B463C',
      background: '#f1c40f',
      marginRight: '10px'
  },
  del: {
      textDecoration: 'none',
      color: '#2B463C',
      background: '#e74c3c'
  },
}));

export default function UserList() {

  const data = [{userid: 1, surname:"John", name:"Doe", age:50, creationDate: "28/03/2000"},{userid: 2, surname:"Jean", name:"Doe", age:50,creationDate: "28/03/2000"},{userid: 3, surname:"Fred", name:"Doe", age:50,creationDate: "28/03/2000"}];
  const classes = useStyles();

  const UserDelete = () => {
    console.log("delete")
  }

  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="lg">    
        <Paper className={classes.paper}>
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Utilisateurs
              </Typography>
            </Box>
            <Box>
            <Link to="/create" style={{textDecoration: 'none'}}>
                <Button variant="contained" style={{margin: '10px',background: '#2B463C', color:'white', outline:'0px'}} >
                  Ajouter
                </Button>
            </Link>
            </Box>
          </Box>
          <TableContainer component={Paper}>
          <Table  aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">ID</TableCell>
                <TableCell align="center">Avatar</TableCell>
                <TableCell align="left">Prénom</TableCell>
                <TableCell align="left">Nom</TableCell>
                <TableCell align="left">date de création</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((data) => (
                <TableRow key={data.userid}>
                  <TableCell align="right">{data.userid}</TableCell>
                  <TableCell align="center">
                    <Box display="flex" justifyContent="center">
                      <Avatar alt="test"/>
                    </Box>
                  </TableCell>
                  <TableCell align="left">{data.surname}</TableCell>
                  <TableCell align="left">{data.name}</TableCell>
                  <TableCell align="left">{data.creationDate}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                       <Link to='update' className={classes.edit}><Button >Modifier</Button></Link>
                       <Link to='delete' className={classes.del}><Button onClick={() => UserDelete()}>Supprimer</Button></Link>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Paper>
      </Container>
    </div>
    
  );
}