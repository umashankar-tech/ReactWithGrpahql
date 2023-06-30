import React from 'react';
import {Box,Typography} from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/Schedule';

interface Props{
  name:string
  hour:string
  date:string
  month:string
  status: string
  npi:number

}
const LocationDetailCard = (props:Props) =>{
  const { name,hour,month,date ,status,npi} = props 

  const monthName = new Date(0, Number(month) - 1).toLocaleString('default', { month: 'long' });

  return(
    <>
    <Box style={{width:"100%"}}>
      <Box style={{ width:"100%",display:"flex",justifyContent:"space-between"}}>
          { name && <Box>
            <Typography>{name }</Typography>
          </Box>}
       { status&&  <Box p={0.2} style={{border:"1px solid orange", borderRadius:"15px",backgroundColor:"orange"}} >
            <Typography style={{marginLeft:"8px",marginRight:"8px"}}>{status} </Typography>
          </Box>}
      </Box>
      <Box mt={0.2} style={{width:"10%"}} >
      <Typography >{npi}</Typography>
      </Box>    
      <Box mt={1} style={{width:"100%",display:"flex",justifyContent:"space-between"}}>
        <Box style={{width:"60%",display:"flex",justifyContent:"space-between"}}>
      { monthName&&date&&
      <Box  style={{width:"80%",display:"flex",}}>
        <CalendarMonthIcon/>
        <Typography style={{marginLeft:"8px",marginRight:"8px"}}>{`${monthName}-${date}`} </Typography>
      </Box>}
   {  hour&&   <Box  style={{width:"80%",display:"flex",}}>
          <ScheduleIcon/>
        <Typography style={{marginLeft:"8px",marginRight:"8px"}}>{`${hour} hr`} </Typography>
        </Box>}
        </Box>
      
        <Box>
        <Typography style={{marginLeft:"8px",marginRight:"8px"}}>{`0 hr`} </Typography>
        </Box>
      </Box>

    </Box>
    </>
  )

}

export default  LocationDetailCard