import React, { useState } from 'react'
import { CreateZellerCustomerInput } from '../__generated__/graphql'

interface Props {
  onSubmit: (input: CreateZellerCustomerInput) => void
}

const NewCustomer: React.FC<Props> = ({ onSubmit }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    onSubmit({ name, email, role })
  }

  return (
    <form onSubmit={submit}>
      <label>
        Name:
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Admin
        <input
          type="radio"
          name="role"
          value="ADMIN"
          onChange={(e) => setRole(e.target.value)}
        />
      </label>
      <label>
        Manager
        <input
          type="radio"
          name="role"
          value="MANAGER"
          onChange={(e) => setRole(e.target.value)}
        />
      </label>
      <button type="submit" name="submit">
        Submit
      </button>
    </form>
  )
}

export default NewCustomer
