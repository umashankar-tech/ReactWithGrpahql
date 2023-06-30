import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";


export default function SearchBar() {
  return (
    <Box style={{display:"flex",width:"100%", textAlign:"center" ,border: "0.5px solid black", borderRadius:"5px"}}>
    <IconButton  color='inherit'  type="submit" aria-label="search">
      <SearchIcon style={{ fill: "grey" }} />
    </IconButton>
     <TextField  style={{border:"none",width:"100%"}}   placeholder="Search..."  size='small' />

      
    </Box>
  )
}
