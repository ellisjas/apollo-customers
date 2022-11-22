import React from 'react'
import { ZellerCustomers } from '../API'

const Customer = ({ name, role }: ZellerCustomers) => {
  return (
    <>
      <h3>{name}</h3>
      <p>{role}</p>
    </>
  )
}

export default Customer
