import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocationDetailCard from "./card";
import { StringLiteral } from 'typescript';


interface Props {
  locationDetails: any
 
}

export default function LocationDetails(props: Props) {
 const { locationDetails} = props

  return (
    <>
  
 
      {
        locationDetails?.map((data:any,index:number)=>{
         const { address,updatedAt,name,status,npi} = data
       
         const dateObj = new Date(updatedAt);

         const formatTwoDigits = (num:number) => {
           return num.toString().padStart(2, '0');
         };
     
         const formattedDate = formatTwoDigits(dateObj.getDate());
         const formattedMonth = formatTwoDigits(dateObj.getMonth() + 1);
         const formattedHour = formatTwoDigits(dateObj.getHours());
         console.log(formattedDate+ formattedMonth+formattedHour )
          return (
            <Box key={index} mt={1}>  
              <Card sx={{ minWidth: 275 }}>
                <CardActions  style={{width:"100%"}}>
                    <CardContent  style={{width:"100%"}}>
                    <LocationDetailCard name ={name} hour={formattedHour} date={formattedDate} month={formattedMonth} status={status} npi={npi} />
                    </CardContent>
                </CardActions>
             </Card>
            </Box>
          )
        })
      }

     </>
  )
}
