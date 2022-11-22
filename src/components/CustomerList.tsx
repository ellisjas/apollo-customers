import React, { useState, useEffect } from 'react'
import { ZellerCustomers } from '../API'
import styled from 'styled-components'
import Header from './Header'

const Container = styled.div`
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  padding: 10px 0;
  margin: 30px 0;
`

interface CustomerListProps {
  customers: ZellerCustomers[]
  role: string
}

const CustomerList: React.FC<CustomerListProps> = ({ customers }) => {
  return (
    <>
      {customers.map((customer: ZellerCustomers) => {
        return (
          <div key={customer.id}>
            <h3>{customer.name}</h3>
            <p>{customer.role}</p>
          </div>
        )
      })}
    </>
  )
}

export default CustomerList
