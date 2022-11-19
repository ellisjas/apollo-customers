/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateZellerCustomers = /* GraphQL */ `
  subscription OnCreateZellerCustomers(
    $id: ID
    $email: String
    $name: String
    $role: String
  ) {
    onCreateZellerCustomers(id: $id, email: $email, name: $name, role: $role) {
      id
      email
      name
      role
    }
  }
`;
export const onUpdateZellerCustomers = /* GraphQL */ `
  subscription OnUpdateZellerCustomers(
    $id: ID
    $email: String
    $name: String
    $role: String
  ) {
    onUpdateZellerCustomers(id: $id, email: $email, name: $name, role: $role) {
      id
      email
      name
      role
    }
  }
`;
export const onDeleteZellerCustomers = /* GraphQL */ `
  subscription OnDeleteZellerCustomers(
    $id: ID
    $email: String
    $name: String
    $role: String
  ) {
    onDeleteZellerCustomers(id: $id, email: $email, name: $name, role: $role) {
      id
      email
      name
      role
    }
  }
`;
