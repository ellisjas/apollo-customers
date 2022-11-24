import React, { useState } from 'react'
import { CustomerListContainer, RadioButtons } from '../components'
import styled from 'styled-components'
import { Heading } from '../utils'

const Container = styled.div`
  padding: 30px 50px;
  width: 500px;
`

const Customers: React.FC = () => {
  const [role, setRole] = useState('ADMIN')

  const handleSelectCustomerRole = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRole(event.target.value)
  }

  return (
    <Container>
      <Heading>User Types</Heading>
      <RadioButtons value={role} onChange={handleSelectCustomerRole} />
      <CustomerListContainer role={role} />
    </Container>
  )
}

export default Customers
