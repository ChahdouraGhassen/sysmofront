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
//------------------------------ Listes Matricules --------------------------
const matricules = [
    {
      value: '122tu4523',
      label: '122tu4523'
    }
  ];
  //--------------------------------End Listes Type-----------------------------
  // -------------------------------Listes Mécaniciens ------------------------
  const mecaniciens = [
    {
      value: 'mecaniciens',
      label: 'mecaniciens'
    }
  ];
  //--------------------------------End Listes Mécaniciens-----------------------------
  // -------------------------------Listes  Taches ------------------------
  const taches = [
    {
      value: 'tollier',
      label: 'tollier'
    }
  ];
  //--------------------------------End Listes taches-----------------------------
  // -------------------------------Listes Chauffeurs ------------------------
  const chauffeurs = [
    {
      value: 'Chauffeurs',
      label: 'Chauffeurs'
    },
    {
      value: 'Chauffeurs',
      label: 'Chauffeurs'
    }
  ];
  //--------------------------------End Listes Chauffeurs-----------------------------
  // -------------------------------Pieces ------------------------
  const pieces = [
    {
      value: 'test',
      label: 'test'
    }
  ];
//--------------------------------End Pieces-----------------------------
//-------------------------------qte---------------------
const quantites = [
    {
      value: '15',
      label: '15'
    }
  ];
//----------------------------------------
const AddBonDeTravail : FC =()=>{
    //------------------------
  const [matricule, setMatricule] = useState('1400tu122');
  const [mecanicien,setMecanicien] = useState('mecaniciens');
  const [tache,setTache] = useState('Clients');
  const [piece,setPiece] = useState('Chauffeurs');
  const [quantite,setQuantite] = useState('processing');
  const [chauffeur,setChauffeur] = useState('processing');

  //------------------------
  const handleChange = (event) => {
    setMatricule(event.target.value);
  };
  const handleChangeM = (event) => {
    setMecanicien(event.target.value);
  };
  const handleChangeC = (event) => {
    setTache(event.target.value);
  };
  const handleChangeCh= (event) => {
    setPiece(event.target.value);
  };
  const handleChangeE= (event) => {
    setQuantite(event.target.value);
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
              <CardHeader title="Bon De Travail" />
              <Divider />
              <CardContent>
                <Box
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '27ch' }
                  }}
                >
                  <div>
                    <TextField
                      id="select-matricule"
                      select
                      label="matricule"
                      helperText="Please select Matricules"
                    >
                      {matricules.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      id="select-chauffeur"
                      select
                      label="Chauffeurs"
                      value={chauffeur}
                      onChange={handleChangeM}
                      helperText="Please select Chauffeurs"
                    >
                      {chauffeurs.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    </div>
                    <div>
                    <TextField
                      id="select-Mecanicien"
                      select
                      label="Mecanicien"
                      value={mecanicien}
                      onChange={handleChange}
                      helperText="Please select your Matricule"                    >
                      {mecaniciens.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>   
                    <TextField
                      id="Pieces"
                      select
                      label="Pieces"
                      value={piece}
                      onChange={handleChangeCh}
                      helperText="Please select your Chauffeur"                    >
                      {pieces.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                     <TextField
                      id="Quantite"
                      type="number" >                   
                    </TextField>
                  </div>
                  <div>
                    <TextField
                      id="filled-select-tache"
                      select
                      label="tache"
                      value={tache}
                      onChange={handleChangeC}
                      helperText="Please select tache"
                    >
                      {taches.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                                 {/* Button ADD taches*/} 
                    <IconButton  sx={{ margin: 2 }}color='error'>
                      <AddIcon/>
                    </IconButton>
                                 {/* ----------------- */}
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
export default AddBonDeTravail;