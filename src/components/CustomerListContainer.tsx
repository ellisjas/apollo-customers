import React from 'react'
import { CustomerList } from '../components'
import CircularProgress from '@mui/material/CircularProgress'
import styled from 'styled-components'
import { Heading } from '../utils'
import { useListZellerCustomers } from '../hooks'

const Container = styled.div`
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  padding: 25px 0 10px;
  margin: 30px 0;
`

const CustomerListContainer = ({ role }: { role: string }) => {
  const { data, loading, error } = useListZellerCustomers(role)

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
    <Container>
      <Heading>{role === 'ADMIN' ? 'Admin Users' : 'Manager Users'}</Heading>
      <CustomerList customers={data.listZellerCustomers.items} />
    </Container>
  )
}

export default CustomerListContainer
