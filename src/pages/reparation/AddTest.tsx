import { FC,useState,Component, useEffect} from 'react';
import axios from 'axios';
import {
  Button,
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider,
  IconButton,
} from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import AddIcon  from '@mui/icons-material/Add';
//----------------------import Page---------------------------
import AddType from './modal/AddType';
import AddMatricule from './modal/AddMatricule';
import AddMecanicien from './modal/AddMecanicien';
import AddClient from './modal/AddClient';
import AddChauffeur from './modal/AddChauffeur';

const AddTest : FC =()=>{

    const [chauf,setChauf]=useState([])
  
    useEffect(()=>
        {
            fetch('https://localhost:44339/api/chauffeur')
            .then(response=>response.json())
            .then(data=>{
             setChauf(data);

        });
    },[]);
  return (
    <>  
      <Container >
        <Grid >
          <Grid 
           container
           sx={
            {
              m:2 
            }
           }
          >
            <Card>
              <CardHeader title="Ajouter Réparation" />
              <Divider />
              <CardContent>
                <Box
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '27ch' }
                  }}
                >
                  <div>
                    <TextField
                      id="select-type"
                      select
                      label="Type"
                      helperText="Please select your type"
                    >
                       {chauf.map(chau=>
                        <MenuItem key={chau.ChauffeurId}>
                         {chau.NomChauffeur}
                        </MenuItem>
                      )}
                    </TextField>

                                 {/* Button ADD Types*/} 
                     <IconButton  sx={{ margin: 2 }}color='error'   >
                      <AddIcon/>
                     </IconButton>

                 </div>
                     </Box>
                <Button variant="contained" sx={{mx:100 }} color="error">
                                Ajouter
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AddTest;
