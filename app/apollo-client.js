// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: process.env.NEXT_PUBLIC_WP_URL,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;