import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { CustomerList, RadioButtons } from '../components'
import { ListZellerCustomers } from '../queries'
import CircularProgress from '@mui/material/CircularProgress'

const Customers: React.FC = () => {
  const [customerRole, setCustomerRole] = useState('ADMIN')

  const { data, loading, error } = useQuery(ListZellerCustomers, {
    variables: {
      filter: {
        role: {
          eq: customerRole,
        },
      },
    },
  })

  const handleSelectCustomerRole = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomerRole(event.target.value)
  }

  const renderContent = () => {
    if (error) {
      console.error(error)
      return <h1>Error!</h1>
    }

    if (loading)
      return (
        <div>
          <CircularProgress />
        </div>
      )

    return (
      <CustomerList
        customers={data.listZellerCustomers.items}
        role={customerRole}
      />
    )
  }

  return (
    <>
      <h1>Customers</h1>
      {renderContent()}
    </>
  )
}

export default Customers
