import { ApolloClient, InMemoryCache } from "@apollo/client";

export default new ApolloClient({
  uri: process.env.GRAPHQL_API_URI ?? "http://api.atypikhou.se/graphql",
  credentials: "include",
  cache: new InMemoryCache(),
});
