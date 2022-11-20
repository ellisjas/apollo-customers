import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { CustomerList, RadioButtons } from '../components'
import { ListZellerCustomers } from '../queries'

const Customers: React.FC = () => {
  const [customerRole, setCustomerRole] = useState('')
  const { data, loading, error } = useQuery(ListZellerCustomers)

  const handleSelectCustomerRole = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomerRole(event.target.value)
  }

  if (loading) return <h1>Loading...</h1>

  if (error) return <h1>Error!</h1>

  return (
    <div>
      <h1>Customers</h1>
      <RadioButtons value={customerRole} onChange={handleSelectCustomerRole} />
      <CustomerList
        customers={data.listZellerCustomers.items}
        role={customerRole}
      />
    </div>
  )
}

export default Customers
