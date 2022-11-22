import React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import styled from 'styled-components'
import { defaultFont, defaultFontColor } from '../utils'

const Container = styled.div`
  margin-top: 15px;
`

const StyledFormControlLabel = styled(FormControlLabel)`
  font-family: ${defaultFont};
  color: ${defaultFontColor};
`

interface RadioButtonsProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void
}

const RadioButtons: React.FC<RadioButtonsProps> = ({ value, onChange }) => {
  return (
    <Container>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          value={value}
          onChange={onChange}
        >
          <StyledFormControlLabel
            value="ADMIN"
            control={<Radio />}
            label="Admin"
          />
          <StyledFormControlLabel
            value="MANAGER"
            control={<Radio />}
            label="Manager"
          />
        </RadioGroup>
      </FormControl>
    </Container>
  )
}

export default RadioButtons
