import React, { useState, useEffect } from 'react'
import { ZellerCustomers } from '../API'

interface CustomerListProps {
  customers: ZellerCustomers[]
  role: string
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, role }) => {
  return (
    <>
      <h1>{role === 'ADMIN' ? 'Admin Users' : 'Manager Users'}</h1>
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
