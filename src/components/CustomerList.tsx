import React from 'react'
import { ZellerCustomers } from '../API'
import Customer from './Customer'

interface CustomerListProps {
  customers: ZellerCustomers[]
}

const CustomerList: React.FC<CustomerListProps> = ({ customers }) => {
  return (
    <>
      {customers.map((customer: ZellerCustomers) => {
        return <Customer {...customer} />
      })}
    </>
  )
}

export default CustomerList
