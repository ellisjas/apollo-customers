import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { CustomerList, RadioButtons } from '../components'
import { ListZellerCustomers } from '../queries'
import CircularProgress from '@mui/material/CircularProgress'
import styled from 'styled-components'
import { Heading } from '../utils'

const Container = styled.div`
  padding: 30px 50px;
  width: 500px;
`

const Content = styled.div`
  margin: 25px 0;
`

const CustomerListContainer = styled.div`
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  padding: 25px 0 10px;
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
      return <Heading>Something went wrong.</Heading>
    }

    if (loading)
      return (
        <div>
          <CircularProgress />
        </div>
      )

    return (
      <CustomerListContainer>
        <Heading>
          {customerRole === 'ADMIN' ? 'Admin Users' : 'Manager Users'}
        </Heading>
        <CustomerList customers={data.listZellerCustomers.items} />
      </CustomerListContainer>
    )
  }

  return (
    <Container>
      <Heading>User Types</Heading>
      <RadioButtons value={customerRole} onChange={handleSelectCustomerRole} />
      <Content>{renderContent()}</Content>
    </Container>
  )
}

export default Customers
