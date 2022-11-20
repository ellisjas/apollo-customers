import React, { useState, useEffect } from 'react'
import { ZellerCustomers } from '../API'

interface CustomerListProps {
  customers: ZellerCustomers[]
  role?: string
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, role }) => {
  const [customerList, setCustomerList] = useState<ZellerCustomers[]>([])

  useEffect(() => {
    if (customers.length > 1) {
      if (role) {
        const filteredList = customers.filter(
          (customer) => role === customer.role + ''
        )

        return setCustomerList(filteredList)
      }

      setCustomerList(customers)
    }
  }, [role])

  return (
    <>
      {customerList.map((customer: ZellerCustomers) => {
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
