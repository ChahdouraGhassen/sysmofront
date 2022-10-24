//---------------------- import ----------------------------
import { FC,useState } from 'react';
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
import AddPiece from './modal/AddPiece';
function AddCommandeOrder (props:any){
  const [isOpenP,SetIsopenP]=useState(false);
return(
<div>  
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
              <CardHeader title="Bon De Commande" / >
              <Divider />
              <CardContent>
                <Box
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '40ch' }
                  }}
                >
                  <div>
                    <TextField
                      id="select-Piece"
                      select
                      helperText="Please select your Piece"
                      >
                        <MenuItem >
                        </MenuItem>
                      
                    </TextField>
                                 {/* Button ADD Pieces*/} 
                     <IconButton  sx={{ margin: 2 }}color='error' onClick={()=>SetIsopenP(true)}>
                      <AddIcon/>
                    </IconButton>
                        {/*        AddPiece        */ }
                        <AddPiece open={isOpenP} >
                       <div >
                       <TextField
                          id="AddPiece"
                          label="Nom Piece"
                          helperText="Please Saisir Nom De Piece">                   
                        </TextField>
                       </div>
                       <div >
                       <TextField
                          id="AddQte"
                          label="Quantite"
                          helperText="Please Saisir Quantite">                   
                        </TextField>
                       </div>
                      <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                                    }}>
                      <Button sx={{ margin: 2}} variant="contained"   color="error" onClick={()=>SetIsopenP(false)}>
                            Annuler
                       </Button>
                       <Button variant="contained"  color="success"   >
                            Ajouter
                       </Button>

                      </div>
                       </AddPiece>
                        {/*      -------------        */ }
                                 {/* -----  IconButton------------ */}
                    <TextField
                      id="select-qte"
                     type="number" 
                    />
                  </div>
                    <div>
                    <TextField
                      id="select-QteStock"
                      label={props.quantite}
                      helperText="Quantite Stock"
                      disabled
                      >
                    </TextField>
                  </div>
                </Box>
                <Button variant="contained" sx={{mx:100 }} color="error">
                  Add
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
);
}
export default AddCommandeOrder;