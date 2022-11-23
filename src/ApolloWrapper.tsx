import React from 'react'
import { createAuthLink, AuthOptions, AUTH_TYPE } from 'aws-appsync-auth-link'
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link'
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink
} from '@apollo/client'
import awsconfig from './aws-exports'
import { onError } from '@apollo/client/link/error'

const url = awsconfig.aws_appsync_graphqlEndpoint

const region = awsconfig.aws_appsync_region

const auth: AuthOptions = {
  type: awsconfig.aws_appsync_authenticationType as typeof AUTH_TYPE.API_KEY,
  apiKey: awsconfig.aws_appsync_apiKey
  // jwtToken: async () => token, // Required when you use Cognito UserPools OR OpenID Connect. token object is obtained previously
  // credentials: async () => credentials, // Required when you use IAM-based auth.
}

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const httpLink = new HttpLink({ uri: url })

const link = ApolloLink.from([
  // @ts-ignore
  createAuthLink({ url, region, auth }),
  createSubscriptionHandshakeLink({ url, region, auth }, httpLink)
])

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
})

const ApolloWrapper = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ApolloWrapper
