import React from 'react'
import { useQuery } from '@apollo/client'
import { CustomerList } from '../components'
import { ListZellerCustomers } from '../queries'
import CircularProgress from '@mui/material/CircularProgress'
import styled from 'styled-components'
import { Heading } from '../utils'

const Container = styled.div`
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  padding: 25px 0 10px;
  margin: 30px 0;
`

const CustomerListContainer = ({ customerRole }: { customerRole: string }) => {
  const { data, loading, error } = useQuery(ListZellerCustomers, {
    variables: {
      filter: {
        role: {
          eq: customerRole,
        },
      },
    },
  })

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
      <Heading>
        {customerRole === 'ADMIN' ? 'Admin Users' : 'Manager Users'}
      </Heading>
      <CustomerList customers={data.listZellerCustomers.items} />
    </Container>
  )
}

export default CustomerListContainer
