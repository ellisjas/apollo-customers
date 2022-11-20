import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { CustomerList, RadioButtons } from '../components'
import { ListZellerCustomers } from '../queries'

const Customers: React.FC = () => {
  const [customerType, setCustomerType] = useState<string>('')
  const { data, loading, error } = useQuery(ListZellerCustomers)

  const handleSelectCustomerType = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomerType(event.target.value)
  }

  if (loading) return <h1>Loading...</h1>

  if (error) return <h1>Error!</h1>

  return (
    <div>
      <h1>Customers</h1>
      <RadioButtons value={customerType} onChange={handleSelectCustomerType} />
      <CustomerList customers={data.listZellerCustomers.items} />
    </div>
  )
}

export default Customers
