import React, { useState } from 'react'
import { CustomerList } from '../components'
import CircularProgress from '@mui/material/CircularProgress'
import styled from 'styled-components'
import { Heading } from '../utils'
import { useMutation, useQuery } from '@apollo/client'
import { ListZellerCustomers } from '../graphql/queries'
import { CreateZellerCustomer } from '../graphql/mutations'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { CreateZellerCustomerInput } from '../__generated__/graphql'
import NewCustomer from './NewCustomer'

const Container = styled.div`
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  padding: 25px 0 10px;
  margin: 30px 0;
  display: relative;
`

const StyledBox = styled(Box)`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  background-color: white;
  border: 2px solid #lightgrey;
  border-radius: 10px;
  boxshadow: 24;
  padding: 15px 20px;
`

const CustomerListContainer = ({ role }: { role: string }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const handleOpen = () => setModalOpen(true)
  const handleClose = () => setModalOpen(false)

  const { data, loading, error } = useQuery(ListZellerCustomers, {
    variables: {
      filter: {
        role: {
          eq: role.toUpperCase(),
        },
      },
    },
  })

  const [createCustomer, newCustomer] = useMutation(CreateZellerCustomer)

  const handleCreateNewCustomer = (input: CreateZellerCustomerInput) => {
    handleClose()

    createCustomer({
      variables: { input },
      optimisticResponse: {
        __typename: 'Mutation',
        addPet: {
          __typename: 'ZellerCustomer',
          id: Math.round(Math.random() * -1000000) + '',
          name: input.name,
          email: input.email,
          role: input.role,
        },
      },
    })
  }

  if (error || newCustomer.error) {
    return <Heading>Something went wrong.</Heading>
  }

  if (loading)
    return (
      <div data-testid="loading-state">
        <CircularProgress />
      </div>
    )

  return (
    <Container>
      <Heading>{role === 'ADMIN' ? 'Admin Users' : 'Manager Users'}</Heading>
      <CustomerList customers={data.listZellerCustomers.items} />
      <Button onClick={handleOpen} variant="contained">
        Add Customer
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalOpen}>
          <StyledBox>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add customer
            </Typography>
            <NewCustomer onSubmit={handleCreateNewCustomer} />
          </StyledBox>
        </Fade>
      </Modal>
    </Container>
  )
}

export default CustomerListContainer
