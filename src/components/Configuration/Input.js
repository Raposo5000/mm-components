import React from 'react'
import { SelectInput, OptionInput } from './style'

const Input = ({ title, values, localStorageKey }) => {
  const handleChangeInput = e => {
    // insert your code here
    // exemple
    console.log(`localStorage.setItem(${localStorageKey}, ${e.target.value} )`)
  }

  return (
    <div>
      <p><font size='5'>{title}</font></p>
      <SelectInput onChange={handleChangeInput}>
        {values.map((el, index) => (
          <OptionInput key={index}>{el}</OptionInput>
        ))}
      </SelectInput>
    </div>
  )
}

export default Input
