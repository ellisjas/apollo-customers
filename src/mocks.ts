import { ZellerCustomers } from "./API";

export const customer: ZellerCustomers = {
  id: '3457356745',
  email: 'jasmine@example.com',
  name: 'Jasmine',
  role: 'ADMIN',
  __typename: 'ZellerCustomers',
}

export const customerList: ZellerCustomers[] = [
  customer,
  {
    id: '4563456',
    email: 'mark@example.com',
    name: 'Mark',
    role: 'MANAGER',
    __typename: 'ZellerCustomers',
  },
  {
    id: '34574567',
    email: 'tim@example.com',
    name: 'Tim',
    role: 'MANAGER',
    __typename: 'ZellerCustomers',
  },
  {
    id: '467456745',
    email: 'edie@example.com',
    name: 'Edie',
    role: 'MANAGER',
    __typename: 'ZellerCustomers',
  },
  {
    id: '23542345',
    email: 'julian@example.com',
    name: 'Julian',
    role: 'ADMIN',
    __typename: 'ZellerCustomers',
  }
]