import React from 'react'
import { TextField } from '@mui/material';
export default function Inputs({handleclick,value,inputdata,inputRef}) {
  return (
    <>
    <TextField 
        //   error
        id="outlined-error-helper-text"
        label={inputdata.label}
        value={value}
        name={inputdata.name}
          helperText="Incorrect entry."
        onChange={(e)=>handleclick(e)}
        inputRef={inputRef}
        autoComplete="off"
        
    />            
    </>
  )
}
