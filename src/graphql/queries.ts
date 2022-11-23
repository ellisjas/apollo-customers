/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getZellerCustomers = /* GraphQL */ `
  query GetZellerCustomers($id: ID!) {
    getZellerCustomers(id: $id) {
      id
      email
      name
      role
    }
  }
`;
export const listZellerCustomers = /* GraphQL */ `
  query ListZellerCustomers(
    $filter: TableZellerCustomersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listZellerCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        name
        role
      }
      nextToken
    }
  }
`;
