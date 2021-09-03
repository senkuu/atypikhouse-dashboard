import { ApolloProvider } from "@apollo/client";
import Container from "@material-ui/core/Container";
import apolloClient from "./apolloClient";
import Sidebar from "./components/Sidebar";
import UserCreate from "./components/UserCreate";
import UserList from "./components/UserList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserUpdate from "./components/UserUpdate";
import PublishOffer from "./components/PublishOffer";
import OwnerOffers from "./components/OwnerOffers";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="App">
        <Router>
          <Sidebar>
            <Container maxWidth="xl">
              <Switch>
                <Route path="/users" component={UserList} />
                <Route path="/create" component={UserCreate} />
                <Route path="/update" component={UserUpdate} />
                <Route path="/publish" component={PublishOffer} />
                <Route path="/offers" component={OwnerOffers} />
              </Switch>
            </Container>
          </Sidebar>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
