import { ApolloClient, InMemoryCache } from "@apollo/client";

export default new ApolloClient({
  uri: process.env.API_URL ?? "http://localhost:4000/graphql",
  credentials: "include",
  cache: new InMemoryCache(),
});
