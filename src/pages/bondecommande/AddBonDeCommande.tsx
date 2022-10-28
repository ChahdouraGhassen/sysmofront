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
//----------------------import pages---------------------------
import AddPiece from './modal/AddPiece';
//------------------------------ Listes Pieces --------------------------
const pieces = [
    {
      value: 'Piece1',
      label: 'Piece1'
    },
    {
      value: 'Piece',
      label: 'Piece'
    }
  ];
  //--------------------------------End Listes Pieces-----------------------------
  // -------------------------------Quantite------------------------
  const quantites = [
    {
      value: '15',
      label: '15'
    }
  ];
  //--------------------------------Quantite-----------------------------
  // -------------------------------Quantite Stock------------------------
  const quantitestocks = [
    {
      value: '15',
      label: '15'
    }
  ];
  //--------------------------------Quantite Stock-----------------------------

const AddBonDeCommande : FC =()=>{
    //------------------------
  const [piece, setPiece] = useState('Piece1');
  const [quantite,setQuantite] = useState('15');
  const [quantitestock,setQuantitestock] = useState('15');
  //--------------
  const [isOpenP,SetIsopenP]=useState(false);
  //------------------------
  const handleChange = (event) => {
    setPiece(event.target.value);
  };
  const handleChangeQ = (event) => {
    setQuantite(event.target.value);
  };
  const handleChangeS = (event) => {
    setQuantitestock(event.target.value);
  };
//---------------------------------------------------
return(
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
              <CardHeader title="Bon De Commande" />
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
                      label="Nom Piece"
                      helperText="Please select your Piece"
                    >
                      {pieces.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
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
                        <TextField
                          id="FourId"
                          label="Fournisseur"
                          helperText="Please Saisir Fournisseur">                   
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
                      disabled
                      label="Quantite Stock"
                      value={quantitestock}
                      onChange={handleChangeS}
                      helperText="Quantite Stock"                    >
                      {quantitestocks.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
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
    </>
);
}
export default AddBonDeCommande;