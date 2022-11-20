import gql from 'graphql-tag'

export const ListZellerCustomers = gql`
<<<<<<< Updated upstream
  query ListZellerCustomers {
    listZellerCustomers {
      items {
        email
        id
        name
        role
      }
    }
  }
`
=======
query ListZellerCustomersByRole($filter: TableZellerCustomersFilterInput) {
  listZellerCustomers(filter: $filter) {
    items {
      email
      id
      name
      role
    }
  }
}
`
>>>>>>> Stashed changes
