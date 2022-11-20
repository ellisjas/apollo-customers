import React from 'react'
import { ZellerCustomers } from '../API'

interface CustomerListProps {
  customers: ZellerCustomers[]
}

const CustomerList: React.FC<CustomerListProps> = ({ customers }) => {
  return (
    <>
      {customers.map((customer: ZellerCustomers) => {
        return (
          <div key={customer.id}>
            <h3>{customer.name}</h3>
            <p>{customer.role}</p>
          </div>
        )
      })}
    </>
  )
}

export default CustomerList
