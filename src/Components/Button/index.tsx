import React from 'react';
import { Box } from '@mui/material';
import Button1 from '@mui/material/Button';


interface Props {
    text: string
  }
export default function Button(props:Props) {

    const {text} = props
  return (
    <Box>
         <Button1 variant="outlined" color="inherit">{text}</Button1>
      
    </Box>
  )
}
