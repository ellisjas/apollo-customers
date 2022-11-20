import React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

interface RadioButtonsProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void
}

const RadioButtons: React.FC<RadioButtonsProps> = ({ value, onChange }) => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">User Type</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        value={value}
        onChange={onChange}
      >
        <FormControlLabel value="ADMIN" control={<Radio />} label="Admin" />
        <FormControlLabel value="MANAGER" control={<Radio />} label="Manager" />
      </RadioGroup>
    </FormControl>
  )
}

export default RadioButtons
