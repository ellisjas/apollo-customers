import React, { useState } from 'react'
import { CustomerListContainer, RadioButtons } from '../components'
import styled from 'styled-components'
import { Heading } from '../utils'

const Container = styled.div`
  padding: 30px 50px;
  width: 500px;
`

const Customers: React.FC = () => {
  const [customerRole, setCustomerRole] = useState('ADMIN')

  const handleSelectCustomerRole = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomerRole(event.target.value)
  }

  return (
    <Container>
      <Heading>User Types</Heading>
      <RadioButtons value={customerRole} onChange={handleSelectCustomerRole} />
      <CustomerListContainer customerRole={customerRole} />
    </Container>
  )
}

export default Customers
