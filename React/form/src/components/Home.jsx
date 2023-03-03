import {React,useRef,useState,useEffect} from 'react'
import { Box,styled,Button } from '@mui/material';
import Inputs from './Inputs';

export default function Home() {
    const [value, setvalue] = useState({firstname:"",email:""})
    const inputRef=useRef(null)

    const inputs=[
        {
            id:1,
            label:"Enter your name",
            name:"firstname"
        },
        {
            id:2,
            label:"Enter your email",
            name:"email"
        },
    ]
    const Component=styled(Box)`
        max-width :300px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        background-color: #fff;
        box-shadow: 2px 0px 8px 0px #000000;
        padding: 50px;
        border-radius: 7px;
    `
    const SubmitButton=styled(Button)`
        width: 50%;
        display: flex;
        align-self: center; 
    `
      useEffect(() => {
        inputRef.current.focus();
      }, [value]);
    const handleclick=(e)=>{
        e.preventDefault()
        setvalue({...value,[e.target.name]:e.target.value})
    }
  return (
    <>
        <Component >
            {inputs.map((item)=>{
                return  <Inputs key={`dossi-${item.id}`} inputRef={inputRef} inputdata={item} handleclick={handleclick} value={value[item.name]}></Inputs>
            })}

    

        <SubmitButton variant="outlined">Submit</SubmitButton>
        </Component>  
    </>
  )
}
