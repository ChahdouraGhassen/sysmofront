//---------------------- import ----------------------------
import { FC,useState,useEffect } from 'react';
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

const AddBonDeTravail : FC =()=>{

  const [chauf,setChauf]=useState([])
  useEffect(()=>
  {
      fetch('https://localhost:44339/api/chauffeur')
      .then(response=>response.json())
      .then(data=>{
       setChauf(data);

  });
},[]);
const [matricule,setMatricule]=useState([])
  useEffect(()=>
  {
      fetch('https://localhost:44339/api/matricule')
      .then(response=>response.json())
      .then(data=>{
        setMatricule(data);

  });
},[]);
const [mecanicien,setMecanicien]=useState([])
  useEffect(()=>
  {
      fetch('https://localhost:44339/api/mecanicien')
      .then(response=>response.json())
      .then(data=>{
      setMecanicien(data);

  });
},[]);
const [piece,setPiece]=useState([])
  useEffect(()=>
  {
      fetch('https://localhost:44339/api/piece')
      .then(response=>response.json())
      .then(data=>{
        setPiece(data);

  });
},[]);
const [type,setType]=useState([])
  useEffect(()=>
  {
      fetch('https://localhost:44339/api/typereparation')
      .then(response=>response.json())
      .then(data=>{
        setType(data);

  });
},[]);
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
                      {matricule.map((mat) => (
                        <MenuItem key={mat.MatriculeID} value={mat.NumeroMatricule}>
                          {mat.NumeroMatricule}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      id="select-chauffeur"
                      select
                      label="Chauffeurs"
                      helperText="Please select Chauffeurs"
                    >
                      {chauf.map((chau) => (
                        <MenuItem key={chau.ChauffeurId} value={chau.NomChauffeur}>
                          {chau.NomChauffeur}
                        </MenuItem>
                      ))}
                    </TextField> 
                    <TextField
                      id="Pieces"
                      select
                      label="Pieces"
                      value={piece}
                      helperText="Please select Piece ">
                      {piece.map((pie) => (
                        <MenuItem key={pie.PieceID} value={pie.NamePiece}>
                          {pie.NamePiece}
                        </MenuItem>
                      ))}
                    </TextField>
                    
                  </div>
                  <div>
                    <TextField
                      id="filled-select-tache"
                      select
                      label="tache"
                      helperText="Please select tache"
                    >
                      {type.map((ty) => (
                        <MenuItem key={ty.TypeID} value={ty.NameTypeReparation}>
                          {ty.NameTypeReparation}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      id="select-Mecanicien"
                      select
                      label="Mecanicien"
                      helperText="Please select Mecanicien"                    >
                      {mecanicien.map((mec) => (
                        <MenuItem key={mec.MecanicienID} value={mec.NameMecanicien}>
                          {mec.NameMecanicien}
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