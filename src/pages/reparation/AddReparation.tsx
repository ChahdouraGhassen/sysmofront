import { FC,useState,useEffect } from 'react';
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
//------------------------------ DATA --------------------------
const types = [
  {
    value: 'Vidange',
    label: 'Vidange'
  },
  {
    value: 'Mécanique',
    label: 'Mécanique'
  }
];

//--------------------------------End Listes Type-----------------------------
// -------------------------------Listes Mécaniciens ------------------------
const mecaniciens = [
  {
    value: 'mecaniciens',
    label: 'mecaniciens'
  },
  {
    value: 'Mécanique',
    label: 'Mécanique'
  }
];
//--------------------------------End Listes Mécaniciens-----------------------------

// -------------------------------Etat ------------------------
const etats = [
  {
    value: 'processing',
    label: 'processing'
  },
  {
    value: 'inprogress',
    label: 'in progress'
  }
  ,
  {
    value: 'completed',
    label: 'completed'
  }
];
//--------------------------------End Etat-----------------------------
const AddReparation : FC =(props:any)=> {
  //------------------------
  const [mecanicien,setMecanicien] = useState('mecaniciens');
  const [client,setClient] = useState('Clients');
  const [chauffeur,setChauffeur] = useState('Chauffeurs');
  const [etat,setEtat] = useState('processing');
  //---------------------------add type ,Matricule ,mecaniciens,client---------------
  const [isOpen,SetIsopen]=useState(false);
  const [isOpenM,SetIsopenM]=useState(false);
  const [isOpenm,SetIsopenm]=useState(false);
  const [isOpenC,SetIsopenC]=useState(false);
  const [isOpenCh,SetIsopenCh]=useState(false);

  //------------------------------
  
  //------------------------
  const handleChangeM = (event) => {
    setMecanicien(event.target.value);
  };
  const handleChangeC = (event) => {
    setClient(event.target.value);
  };
  const handleChangeCh= (event) => {
    setChauffeur(event.target.value);
  };
  const handleChangeE= (event) => {
    setEtat(event.target.value);
  };
  const [matricules,setMatricules] = useState([]);

//---------------------------------------------------
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
                      {types.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>

                                 {/* Button ADD Types*/} 
                     <IconButton  sx={{ margin: 2 }}color='error' onClick={()=>SetIsopen(true) }  >
                      <AddIcon/>
                     </IconButton>

                     {/*        AddType          */ }
                       <AddType open={isOpen} >
                       <div >
                       <TextField
                          id="Add Type"
                          label="Type"
                          helperText="Please Saisir Type">                   
                        </TextField>
                       </div>
                      <div>
                      <Button sx={{ margin: 2}} variant="contained"   color="error" onClick={()=>SetIsopen(false)}>
                            Annuler
                       </Button>
                       <Button variant="contained"  color="success"   >
                            Ajouter
                       </Button>

                      </div>
                       </AddType>
                        {/*      -------------        */ }
                                 {/* -----  IconButton------------ */}
                    <TextField
                      id="select-mecanicien"
                      select
                      label="Mécaniciens"
                      value={mecanicien}
                      onChange={handleChangeM}
                      helperText="Please select your Mécaniciens"
                    >
                      {mecaniciens.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                                 {/* Button ADD Mécaniciens*/} 
                    <IconButton sx={{ margin: 2}}color='error' onClick={()=>SetIsopenm(true) }>
                      <AddIcon/>
                    </IconButton>
                    {/*        AddMecaniciens          */ }
                    <AddMecanicien open={isOpenm} >
                       <div >
                       <TextField
                          id="nom"
                          label="Nom"
                          helperText="Please Saisir Nom">                   
                        </TextField>
                       </div>
                       <div >
                       <TextField
                          id="age"
                          label="Age"
                          helperText="Please Saisir Age">                   
                        </TextField>
                       </div>
                       <div >
                       <TextField
                          id="Poste"
                          label="Poste"
                          helperText="Please Saisir Poste">                   
                        </TextField>
                       </div>
                      <div>
                      <Button sx={{ margin: 2}} variant="contained"   color="error" onClick={()=>SetIsopenm(false)}>
                            Annuler
                       </Button>
                       <Button variant="contained"  color="success">
                            Ajouter
                       </Button>

                      </div>
                       </AddMecanicien>
                        {/*      -------------        */ }
                                 {/* ----------------- */}
                    <TextField
                      id="filled-select-type"
                      select
                      label="Client"
                      value={client}
                      onChange={handleChangeC}
                      helperText="Please select your Client"
                    >
                      {types.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                                 {/* Button ADD Client*/} 
                    <IconButton  sx={{ margin: 2 }}color='error' onClick={()=>SetIsopenC(true)}>
                      <AddIcon/>
                    </IconButton>
                     {/*        AddClients          */ }
                     <AddClient open={isOpenC} >
                       <div >
                       <TextField
                          id="nomclient"
                          label="Nom"
                          helperText="Please Saisir Nom">                   
                        </TextField>
                       </div>
                       <div >
                       <TextField
                          id="nvsicale"
                          label="nvsicale"
                          helperText="Please Saisir nvsicale">                   
                        </TextField>
                       </div>
                       <div >
                       <TextField
                          id="emplacement"
                          label="emplacement"
                          helperText="Please Saisir emplacement">                   
                        </TextField>
                       </div>
                       <div >
                       <TextField
                          id="tel"
                          label="tel"
                          helperText="Please Saisir tel">                   
                        </TextField>
                       </div>
                      <div>
                      <Button sx={{ margin: 2}} variant="contained"   color="error" onClick={()=>SetIsopenC(false)}>
                            Annuler
                       </Button>
                       <Button variant="contained"  color="success">
                            Ajouter
                       </Button>

                      </div>
                       </AddClient>
                        {/*      -------------        */ }
                                 {/* ----------------- */}
                  </div>
                    <div>
                    <TextField
                      id="select-Matricule"
                      select
                      label="Matricule"
                      onChange={props.setMatricules}
                      helperText="Please select your Matricule">
                      {props.matricules.map((matricule) => (
                        <MenuItem key={matricule.id} value={matricule.numero}>
                        </MenuItem>
                      ))}
                    </TextField>
                                  {/* Button ADD Matricules*/} 
                     <IconButton  sx={{ margin: 2 }}color='error' onClick={()=>SetIsopenM(true) }>
                      <AddIcon/>
                    </IconButton>
                    {/*        AddMatricule          */ }
                    <AddMatricule open={isOpenM} >
                       <div>
                       <TextField
                          id="Add Matricule"
                          helperText="Please Saisir Matricule">                   
                         </TextField>
                       </div>
                      <div>
                      <Button variant="contained"  color="error" sx={{ margin: 2}} onClick={()=>SetIsopenM(false)}>
                            Annuler
                       </Button>
                       <Button variant="contained"  color="success"    >
                            Ajouter
                       </Button>
                      </div>
                       </AddMatricule>
                        {/*      -------------        */ }
                                 {/* -----  IconButton------------ */}
                    <TextField
                      id="select-Chauffeur"
                      select
                      label="Chauffeur"
                      value={chauffeur}
                      onChange={handleChangeCh}
                      helperText="Please select your Chauffeur"                    >
                      {types.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                                  {/* Button ADD Chauffeur */} 
                     <IconButton  sx={{ margin: 2 }}color='error'  onClick={()=>SetIsopenCh(true)}>
                      <AddIcon/>
                    </IconButton>
                    {/*        AddChauffeur          */ }
                    <AddChauffeur open={isOpenCh} >
                       <div >
                       <TextField
                          id="nomchauffeur"
                          label="Nom Chauffeur"
                          helperText="Please Saisir Nom Chauffeur">                   
                        </TextField>
                       </div>
                       <div >
                       <TextField
                          id="CIN"
                          label="CIN"
                          helperText="Please Saisir CIN">                   
                        </TextField>
                       </div>
                       <div >
                       <TextField
                          id="N.permis"
                          label="N.permis"
                          helperText="Please Saisir N.permis">                   
                        </TextField>
                       </div>
                       <div >
                       <TextField
                          id="tel"
                          label="tel"
                          helperText="Please Saisir tel">                   
                        </TextField>
                       </div>
                      <div>
                      <Button sx={{ margin: 2}} variant="contained"   color="error" onClick={()=>SetIsopenCh(false)}>
                            Annuler
                       </Button>
                       <Button variant="contained"  color="success" >
                            Ajouter
                       </Button>

                      </div>
                       </AddChauffeur>
                        {/*      -------------        */ }
                                 {/* -----  IconButton------------ */}
                  </div>
                  </Box>
                  <Box
                   sx={
                    {
                      '& .MuiTextField-root': { m: 1} 
                     }
                  } >
                  <div>
                  <TextField
                      id="saisir-KM"
                      label="KM"
                      helperText="Please Saisir KM" 
                      style={{
                        width: '40ch',
                      }} 
                      >                   
                    </TextField>
                    <TextField
                      id="saisir-Details"
                      label="Détails"
                      helperText="Please Saisir Détails" >                   
                    </TextField>
                  </div>
                  </Box>  
                  <Box
                   sx={
                    {
                      '& .MuiTextField-root': { m: 1 } 
                     }
                  } >
                  <div>
                   
                  <TextField
                      id="Description"
                      label="Description"
                      helperText="Description" 
                      rows={5}
                      multiline        
                      style={{
                        width: '100ch',
                      }} 
                      >   
                    </TextField>
              
                    <TextField
                      id="select-Etat"
                      select
                      label="Etat"
                      value={etat}
                      onChange={handleChangeE}
                      helperText="Please select your Etat"
                        >
                      {etats.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
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

export default AddReparation;
