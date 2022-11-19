/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateZellerCustomersInput = {
  email: string,
  name: string,
<<<<<<< Updated upstream
  role: Role,
};

export enum Role {
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
}
=======
  role: string,
};
>>>>>>> Stashed changes


export type ZellerCustomers = {
  __typename: "ZellerCustomers",
  id: string,
  email: string,
  name: string,
<<<<<<< Updated upstream
  role: Role,
=======
  role: string,
>>>>>>> Stashed changes
};

export type UpdateZellerCustomersInput = {
  id: string,
  email?: string | null,
  name?: string | null,
<<<<<<< Updated upstream
  role?: Role | null,
=======
  role?: string | null,
>>>>>>> Stashed changes
};

export type DeleteZellerCustomersInput = {
  id: string,
};

export type TableZellerCustomersFilterInput = {
  id?: TableIDFilterInput | null,
  email?: TableStringFilterInput | null,
  name?: TableStringFilterInput | null,
  role?: TableStringFilterInput | null,
};

export type TableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ZellerCustomersConnection = {
  __typename: "ZellerCustomersConnection",
  items?:  Array<ZellerCustomers | null > | null,
  nextToken?: string | null,
};

export type CreateZellerCustomersMutationVariables = {
  input: CreateZellerCustomersInput,
};

export type CreateZellerCustomersMutation = {
  createZellerCustomers?:  {
    __typename: "ZellerCustomers",
    id: string,
    email: string,
    name: string,
<<<<<<< Updated upstream
    role: Role,
=======
    role: string,
>>>>>>> Stashed changes
  } | null,
};

export type UpdateZellerCustomersMutationVariables = {
  input: UpdateZellerCustomersInput,
};

export type UpdateZellerCustomersMutation = {
  updateZellerCustomers?:  {
    __typename: "ZellerCustomers",
    id: string,
    email: string,
    name: string,
<<<<<<< Updated upstream
    role: Role,
=======
    role: string,
>>>>>>> Stashed changes
  } | null,
};

export type DeleteZellerCustomersMutationVariables = {
  input: DeleteZellerCustomersInput,
};

export type DeleteZellerCustomersMutation = {
  deleteZellerCustomers?:  {
    __typename: "ZellerCustomers",
    id: string,
    email: string,
    name: string,
<<<<<<< Updated upstream
    role: Role,
=======
    role: string,
>>>>>>> Stashed changes
  } | null,
};

export type GetZellerCustomersQueryVariables = {
  id: string,
};

export type GetZellerCustomersQuery = {
  getZellerCustomers?:  {
    __typename: "ZellerCustomers",
    id: string,
    email: string,
    name: string,
<<<<<<< Updated upstream
    role: Role,
=======
    role: string,
>>>>>>> Stashed changes
  } | null,
};

export type ListZellerCustomersQueryVariables = {
  filter?: TableZellerCustomersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListZellerCustomersQuery = {
  listZellerCustomers?:  {
    __typename: "ZellerCustomersConnection",
    items?:  Array< {
      __typename: "ZellerCustomers",
      id: string,
      email: string,
      name: string,
<<<<<<< Updated upstream
      role: Role,
=======
      role: string,
>>>>>>> Stashed changes
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateZellerCustomersSubscriptionVariables = {
  id?: string | null,
  email?: string | null,
  name?: string | null,
<<<<<<< Updated upstream
  role?: Role | null,
=======
  role?: string | null,
>>>>>>> Stashed changes
};

export type OnCreateZellerCustomersSubscription = {
  onCreateZellerCustomers?:  {
    __typename: "ZellerCustomers",
    id: string,
    email: string,
    name: string,
<<<<<<< Updated upstream
    role: Role,
=======
    role: string,
>>>>>>> Stashed changes
  } | null,
};

export type OnUpdateZellerCustomersSubscriptionVariables = {
  id?: string | null,
  email?: string | null,
  name?: string | null,
<<<<<<< Updated upstream
  role?: Role | null,
=======
  role?: string | null,
>>>>>>> Stashed changes
};

export type OnUpdateZellerCustomersSubscription = {
  onUpdateZellerCustomers?:  {
    __typename: "ZellerCustomers",
    id: string,
    email: string,
    name: string,
<<<<<<< Updated upstream
    role: Role,
=======
    role: string,
>>>>>>> Stashed changes
  } | null,
};

export type OnDeleteZellerCustomersSubscriptionVariables = {
  id?: string | null,
  email?: string | null,
  name?: string | null,
<<<<<<< Updated upstream
  role?: Role | null,
=======
  role?: string | null,
>>>>>>> Stashed changes
};

export type OnDeleteZellerCustomersSubscription = {
  onDeleteZellerCustomers?:  {
    __typename: "ZellerCustomers",
    id: string,
    email: string,
    name: string,
<<<<<<< Updated upstream
    role: Role,
=======
    role: string,
>>>>>>> Stashed changes
  } | null,
};
