import gql from 'graphql-tag'

export const ListZellerCustomers = gql`
query ListZellerCustomersByRole($filter: TableZellerCustomerFilterInput) {
  listZellerCustomers(filter: $filter) {
    items {
      email
      id
      name
      role
    }
  }
}`
