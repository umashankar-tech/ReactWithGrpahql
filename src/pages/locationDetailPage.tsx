import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CachedIcon from '@mui/icons-material/Cached';
import AddIcon from '@mui/icons-material/Add';
import SearchBar from '../Components/SearchBar';
import TextButton from '../Components/Button';
import LocationDetails from '../Components/LocationDetails';

interface Props {
    locationaDetails:any
}

const LocationDetailPage = ( props:Props ) =>{

    const {locationaDetails} = props
    return(
        <CardActions style={{width:"30%" , border: "0.5px solid black",borderRadius:"5px",marginLeft:"1%",marginTop:"1%"}}>
            <CardContent style={{width:"100%"}}  >
                <Box style={{width:"100%"}} >
                    <Box style={{width:"100%",}}>
                    <Box  style={{display:"flex",justifyContent:"space-between" }}>
                        <Button color="inherit" variant='outlined'>
                           <CachedIcon style={{ fill: "grey" }}/>  
                        </Button>
                        <Box>
                            <Typography variant='h6'> Locations</Typography>
                        </Box>
                        <Button color="inherit" variant='outlined'>
                            <AddIcon style={{ fill: "grey" }}/>
                       </Button>
                    </Box>
                    <Box mt={1}>
                        <SearchBar/>
                    </Box>
                    <Box  mt={1} style= {{width:"100%",display:"flex", justifyContent:"space-between"}}>
                     <TextButton text="Filter1"/>
                     <TextButton text="Filter2"/>
                     <TextButton text="Filter3"/>
                     <TextButton text="Filter4"/>
                    </Box>
                    <Divider style={{color:"black" , fontSize:"10px" , marginTop:"10px",marginBottom:"10px" }}  />
                    </Box>
                    <Box>
                        <LocationDetails locationDetails ={locationaDetails}/>

                    </Box>
                </Box>
            </CardContent>
        </CardActions>
    )

}

export default  LocationDetailPage 