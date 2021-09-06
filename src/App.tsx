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
import OfferUpdate from "./components/OfferUpdate";
import AdminOffers from "./components/AdminOffers";
import WaitingOffers from "./components/WaitingOffers";
import DisabledOffers from "./components/DisabledOffers";
import OwnerList from "./components/OwnerList";
import PlanningOffers from "./components/PlanningOffers";
import PlanningOffer from "./components/PlanningOffer";

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
                <Route path="/updateOffer" component={OfferUpdate} />
                <Route path="/offers_available" component={AdminOffers} />
                <Route path="/activationPending" component={OwnerList} />
                <Route path="/PlanningOffers" component={PlanningOffers} />
                <Route path="/PlanningOffer" component={PlanningOffer} />
                <Route
                  path="/offers_waiting_approval"
                  component={WaitingOffers}
                />
                <Route path="/offers_disabled" component={DisabledOffers} />
              </Switch>
            </Container>
          </Sidebar>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
