import React from 'react'
import { ZellerCustomer } from '../__generated__/graphql'
import Customer from './Customer'

interface CustomerListProps {
  customers: ZellerCustomer[]
}

const CustomerList: React.FC<CustomerListProps> = ({ customers }) => {
  return (
    <>
      {customers.map((customer: ZellerCustomer) => {
        return <Customer {...customer} key={customer.id} />
      })}
    </>
  )
}

export default CustomerList
