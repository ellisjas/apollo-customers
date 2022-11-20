import { useQuery } from '@apollo/client'
import React from 'react'
import CustomerList from '../components/CustomerList'
import { ListZellerCustomers } from '../queries'

const Customers: React.FC = () => {
  const { data, loading, error } = useQuery(ListZellerCustomers)

  if (loading) return <h1>Loading...</h1>

  if (error) return <h1>Error!</h1>

  return (
    <div>
      <h1>Customers</h1>
      <CustomerList customers={data.listZellerCustomers.items} />
    </div>
  )
}

export default Customers
