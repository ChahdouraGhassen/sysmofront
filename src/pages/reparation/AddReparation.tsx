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
//----------------------import Page---------------------------
import AddType from './modal/AddType';
import AddMatricule from './modal/AddMatricule';
import AddMecanicien from './modal/AddMecanicien';
import AddClient from './modal/AddClient';
import AddChauffeur from './modal/AddChauffeur';

const AddReparation : FC =()=> {
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
//---------------------------
const [type,setType]=useState([])
  useEffect(()=>
  {
      fetch('https://localhost:44339/api/typereparation')
      .then(response=>response.json())
      .then(data=>{
        setType(data);

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
const [client,setClient]=useState([])
  useEffect(()=>
  {
      fetch('https://localhost:44339/api/client')
      .then(response=>response.json())
      .then(data=>{
      setClient(data);
  });
},[]);
const [etat,setEtat]=useState([])
  useEffect(()=>
  {
      fetch('https://localhost:44339/api/etat')
      .then(response=>response.json())
      .then(data=>{
      setEtat(data);
  });
},[]);

  //---------------------------add type ,Matricule ,mecaniciens,client---------------
  const [isOpen,SetIsopen]=useState(false);
  const [isOpenM,SetIsopenM]=useState(false);
  const [isOpenm,SetIsopenm]=useState(false);
  const [isOpenC,SetIsopenC]=useState(false);
  const [isOpenCh,SetIsopenCh]=useState(false);

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
                      {type.map((ty) => (
                        <MenuItem key={ty.TypeID} value={ty.NameTypeReparation}>
                          {ty.NameTypeReparation}
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
                      
                      helperText="Please select your Mécaniciens"
                    >
                      {mecanicien.map((mec) => (
                        <MenuItem key={mec.MecanicienID} value={mec.NameMecanicien}>
                          {mec.NameMecanicien}
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
                      helperText="Please select your Client"
                    >
                      {client.map((cli) => (
                        <MenuItem key={cli.ClientId} value={cli.Identification}>
                          {cli.Identification}
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
                      helperText="Please select your Matricule"                    >
                      {matricule.map((mat) => (
                        <MenuItem key={mat.id} value={mat.NumeroMatricule}>
                          {mat.NumeroMatricule}
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
                      helperText="Please select your Chauffeur"                    >
                      {chauf.map((chau) => (
                        <MenuItem key={chau.ChauffeurId} value={chau.NomChauffeur}>
                          {chau.NomChauffeur}
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
                      <TextField
                      id="saisir-KM"
                      label="KM"
                      helperText="Please Saisir KM" 
                      style={{
                        width: '20ch',
                      }} 
                      >
                      </TextField>
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
                      id="saisir-Details"
                      label="Etat Initial Avant Reparation"
                      helperText="Please Saisir Etat Initial " 
                      style={{
                        width: '90ch',
                      }} >                   
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
                      label="Operation Effectuee"
                      helperText="Operation Effectuee" 
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
                      helperText="Please select your Etat"
                        >
                      {etat.map((eta) => (
                        <MenuItem key={eta.EtatID} value={eta.NomEtat}>
                          {eta.NomEtat}
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
