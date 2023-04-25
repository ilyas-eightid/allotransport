// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: process.env.STRAPI_PUBLIC_URL + '/graphql',
    cache: new InMemoryCache(),
});

export default client;