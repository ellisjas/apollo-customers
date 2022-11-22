import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { CustomerList, RadioButtons } from '../components'
import { ListZellerCustomers } from '../queries'
import CircularProgress from '@mui/material/CircularProgress'
import styled from 'styled-components'
import Header from '../components/Header'

const Container = styled.div`
  padding: 10px 40px;
  width: 500px;
`

const CustomerListContainer = styled.div`
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  padding: 10px 0;
  margin: 30px 0;
`

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
      <>
        <Header>
          {customerRole === 'ADMIN' ? 'Admin Users' : 'Manager Users'}
        </Header>
        <CustomerListContainer>
          <CustomerList customers={data.listZellerCustomers.items} />
        </CustomerListContainer>
      </>
    )
  }

  return (
    <Container>
      <Header>User Types</Header>
      <RadioButtons value={customerRole} onChange={handleSelectCustomerRole} />
      {renderContent()}
    </Container>
  )
}

export default Customers
