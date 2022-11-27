import { gql } from "@apollo/client";

export const CreateZellerCustomer = gql`
  mutation CreateZellerCustomer($input: CreateZellerCustomerInput!) {
    createZellerCustomer(input: $input) {
      email
      id
      name
      role
    }
  }
`
