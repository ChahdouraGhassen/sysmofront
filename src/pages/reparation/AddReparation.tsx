import { FC, useState, useEffect } from 'react';
import * as React from 'react';
import {
  Button,
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider,
  IconButton,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import AddIcon from '@mui/icons-material/Add';
import { Printer } from 'react-bootstrap-icons';
import { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
//----------------------import Page---------------------------
import AddType from './modal/AddType';
import AddMatricule from './modal/AddMatricule';
import AddMecanicien from './modal/AddMecanicien';
import AddClient from './modal/AddClient';
import AddChauffeur from './modal/AddChauffeur';
import Axios from 'axios';
//sweet alert 2
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

//
const AddReparation: FC = () => {
  //
  const MySwal = withReactContent(Swal)
  //
  const [chauf, setChauf] = useState([])
  const [typerpar, setTyperpar] = useState<string[]>([])
  const [meca, setMeca] = useState('')
  const [clientt, setClientt] = useState('')
  const [matri, setMatri] = useState('')
  const [chauffe, setChauffe] = useState('')
  const [kilom, setKilom] = useState('')
  const [ini, setIni] = useState('')
  const [des, setDes] = useState('')
  const [etatt, setEtatt] = useState('')
  const [namerepar, setNameRepar] = useState('')
  //mecanicien Add
  const [nommec, setNomMec] = useState('')
  const [agemec, setAgeMec] = useState('')
  const [postm, setPostM] = useState('')
  //Client Add
  const [clientn, setClientN] = useState('')
  const [nvsclient, setNvsclient] = useState('')
  const [emp, setEmp] = useState('')
  const [tel, setTel] = useState('')
  //matriculeAdd
  const [num, setNum] = useState('')
  //date
  const [value, setValue] = useState<Dayjs | null>(null);

  useEffect(() => {
    fetch('https://localhost:44339/api/chauffeur')
      .then(response => response.json())
      .then(data => {
        setChauf(data);

      });
  }, []);
  const [matricule, setMatricule] = useState([])
  useEffect(() => {
    fetch('https://localhost:44339/api/matricule')
      .then(response => response.json())
      .then(data => {
        setMatricule(data);
      });
  }, []);
  //---------------------------
  const [type, setType] = useState([])
  useEffect(() => {
    fetch('https://localhost:44339/api/typereparation')
      .then(response => response.json())
      .then(data => {
        setType(data);

      });
  }, []);
  const [mecanicien, setMecanicien] = useState([])
  useEffect(() => {
    fetch('https://localhost:44339/api/mecanicien')
      .then(response => response.json())
      .then(data => {
        setMecanicien(data);

      });
  }, []);
  const [client, setClient] = useState([])
  useEffect(() => {
    fetch('https://localhost:44339/api/client')
      .then(response => response.json())
      .then(data => {
        setClient(data);
      });
  }, []);
  const [etat, setEtat] = useState([])
  useEffect(() => {
    fetch('https://localhost:44339/api/etat')
      .then(response => response.json())
      .then(data => {
        setEtat(data);
      });
  }, []);
  /////////multi select function
  const handleChange = (event: SelectChangeEvent<typeof typerpar>) => {
    const {
      target: { value },
    } = event;
    setTyperpar(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const HandlePoste = (e) => {
    e.preventDefault();
    Axios.post('https://localhost:44339/api/reparation', {
      TypeRepar: typerpar.toString(),
      Mecanicien: meca,
      Client: clientt,
      Matricule: matri,
      Chauffeur: chauffe,
      KM: kilom,
      EtatInitial: ini,
      RepDescription: des,
      Etat: etatt,
      Datee: value.format('dddd, MMMM D, YYYY').toString()
    }).then(res => (setTyperpar([""]), setMeca(""), setClientt(""), setMatri(""), setChauffe(""), setKilom(""), setIni(""), setDes(""), setEtatt(""),
      SetIsopenC(false),
      MySwal.fire({
        title: <strong>Added Successfully</strong>,
        confirmButtonText:
          <Printer />,
        icon: 'success'
      }))).catch(err => console.log(err))
  }
  //////////////////////////////       TypeReparation Function
  const AddTypeRep = (e) => {
    e.preventDefault();
    Axios.post('https://localhost:44339/api/typereparation', {
      NameTypeReparation: namerepar
    }).then(res => (setNameRepar(""),
      SetIsopen(false),
      MySwal.fire({
        title: <strong>Added Successfully</strong>,
        icon: 'success'
      }))
    ).catch(err => console.log(err))
  }

  /////////////////////////
  const AddMecanicienListe = (e) => {
    e.preventDefault();
    Axios.post('https://localhost:44339/api/mecanicien', {
      NameMecanicien: nommec,
      Age: agemec,
      Poste: postm
    }).then(res => (setNomMec(""), setAgeMec(""), setPostM(""),
      SetIsopenm(false),
      MySwal.fire({
        title: <strong>Added Successfully</strong>,
        icon: 'success'
      }))
    ).catch(err => console.log(err))
  }
  //AddClientListe
  const AddClientListe = (e) => {
    e.preventDefault();
    Axios.post('https://localhost:44339/api/client', {
      Identification: clientn,
      Adresse: emp,
      Tel: tel
    }).then(res => (setClientN(""), setEmp(""), setTel(""),
      SetIsopenC(false),
      MySwal.fire({
        title: <strong>Added Successfully</strong>,
        icon: 'success'
      }))
    ).catch(err => console.log(err))
  }
  //AddMatriculeListe
  const AddMatriculeListe = (e) => {
    e.preventDefault();
    Axios.post('https://localhost:44339/api/client', {
      Identification: clientn,
      Adresse: emp,
      Tel: tel
    }).then(res => (setClientN(""), setEmp(""), setTel(""),
      SetIsopenC(false),
      MySwal.fire({
        title: <strong>Added Successfully</strong>,
        icon: 'success'
      }))
    ).catch(err => console.log(err))
  }


  //---------------------------add type ,Matricule ,mecaniciens,client---------------
  const [isOpen, SetIsopen] = useState(false);
  const [isOpenM, SetIsopenM] = useState(false);
  const [isOpenm, SetIsopenm] = useState(false);
  const [isOpenC, SetIsopenC] = useState(false);
  const [isOpenCh, SetIsopenCh] = useState(false);
  return (
    <>
      <Container >
        <Grid >
          <Grid
            container
            sx={
              {
                m: 2
              }
            }
          >
            <Card>
              <CardHeader title="Ajouter Réparation" />
              <Divider />
              <CardContent>
                <Box
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '23ch' }
                  }}
                >
                  <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Date"
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                    <Select
                      id="select-type"
                      value={typerpar}
                      multiple
                      name="TypeRepar"
                      label="Type"
                      onChange={handleChange}
                      placeholder="tet"
                    >
                      {type.map((ty) => (
                        <MenuItem key={ty.TypeID} value={ty.NameTypeReparation}>
                          {ty.NameTypeReparation}
                        </MenuItem>
                      ))}
                    </Select>

                    {/* Button ADD Types*/}
                    <IconButton sx={{ margin: 2 }} color='error' onClick={() => SetIsopen(true)}  >
                      <AddIcon />
                    </IconButton>

                    {/*        AddType          */}
                    <AddType open={isOpen} >
                      <div >
                        <TextField
                          id="Add Type"
                          label="Type"
                          helperText="Please Saisir Type"
                          value={namerepar}
                          onChange={(e) => setNameRepar(e.target.value)}
                        >
                        </TextField>
                      </div>
                      <div>
                        <Button sx={{ margin: 2 }} variant="contained" color="error" onClick={() => SetIsopen(false)}>
                          Annuler
                        </Button>
                        <Button variant="contained" color="success" onClick={AddTypeRep} >
                          Ajouter
                        </Button>

                      </div>
                    </AddType>
                    {/*      -------------        */}
                    {/* -----  IconButton------------ */}
                    <TextField
                      id="select-mecanicien"
                      select
                      value={meca}
                      label="Mécaniciens"
                      name="Mecanicien"
                      helperText="Please select your Mécaniciens"
                      onChange={(e) => setMeca(e.target.value)}
                    >
                      {mecanicien.map((mec) => (
                        <MenuItem key={mec.MecanicienID} value={mec.NameMecanicien}>
                          {mec.NameMecanicien}
                        </MenuItem>
                      ))}
                    </TextField>
                    {/* Button ADD Mécaniciens*/}
                    <IconButton sx={{ margin: 2 }} color='error' onClick={() => SetIsopenm(true)}>
                      <AddIcon />
                    </IconButton>
                    {/*        AddMecaniciens          */}
                    <AddMecanicien open={isOpenm} >
                      <div >
                        <TextField
                          id="nom"
                          label="Nom"
                          helperText="Please Saisir Nom"
                          value={nommec}
                          onChange={(e) => setNomMec(e.target.value)}
                        >
                        </TextField>
                      </div>
                      <div >
                        <TextField
                          id="age"
                          label="Age"
                          helperText="Please Saisir Age"
                          value={agemec}
                          onChange={(e) => setAgeMec(e.target.value)}
                        >
                        </TextField>
                      </div>
                      <div >
                        <TextField
                          id="Poste"
                          label="Poste"
                          helperText="Please Saisir Poste"
                          value={postm}
                          onChange={(e) => setPostM(e.target.value)}
                        >
                        </TextField>
                      </div>
                      <div>
                        <Button sx={{ margin: 2 }} variant="contained" color="error" onClick={() => SetIsopenm(false)}>
                          Annuler
                        </Button>
                        <Button variant="contained" color="success" onClick={AddMecanicienListe}>
                          Ajouter
                        </Button>
                      </div>
                    </AddMecanicien>
                    {/*      -------------        */}
                    {/* ----------------- */}
                    <TextField
                      id="filled-select-type"
                      select
                      name="Client"
                      value={clientt}
                      label="Client"
                      helperText="Please select your Client"
                      onChange={(e) => setClientt(e.target.value)}
                    >
                      {client.map((cli) => (
                        <MenuItem key={cli.ClientId} value={cli.Identification}>
                          {cli.Identification}
                        </MenuItem>
                      ))}
                    </TextField>
                    {/* Button ADD Client*/}
                    <IconButton sx={{ margin: 2 }} color='error' onClick={() => SetIsopenC(true)}>
                      <AddIcon />
                    </IconButton>
                    {/*        AddClients          */}
                    <AddClient open={isOpenC} >
                      <div >
                        <TextField
                          id="nomclient"
                          label="Nom"
                          helperText="Please Saisir Nom"
                          value={clientn}
                          onChange={(e) => setClientN(e.target.value)}

                        >
                        </TextField>
                      </div>
                      <div >
                        <TextField
                          id="nvsicale"
                          label="nvsicale"
                          helperText="Please Saisir nvsicale"
                          value={nvsclient}
                          onChange={(e) => setNvsclient(e.target.value)}

                        >
                        </TextField>
                      </div>
                      <div >
                        <TextField
                          id="emplacement"
                          label="emplacement"
                          helperText="Please Saisir emplacement"
                          value={emp}
                          onChange={(e) => setEmp(e.target.value)}
                        >
                        </TextField>
                      </div>
                      <div >
                        <TextField
                          id="tel"
                          label="tel"
                          helperText="Please Saisir tel"
                          value={tel}
                          onChange={(e) => setTel(e.target.value)}
                        >
                        </TextField>
                      </div>
                      <div>
                        <Button sx={{ margin: 2 }} variant="contained" color="error" onClick={() => SetIsopenC(false)}>
                          Annuler
                        </Button>
                        <Button variant="contained" color="success" onClick={AddClientListe}>
                          Ajouter
                        </Button>

                      </div>
                    </AddClient>
                    {/*      -------------        */}
                    {/* ----------------- */}
                  </div>
                  <div>
                    <TextField
                      id="select-Matricule"
                      select
                      name="Matricule"
                      label="Matricule"
                      value={matri}
                      helperText="Please select your Matricule"
                      onChange={(e) => setMatri(e.target.value)}
                    >
                      {matricule.map((mat) => (
                        <MenuItem key={mat.id} value={mat.NumeroMatricule}>
                          {mat.NumeroMatricule}
                        </MenuItem>
                      ))}
                    </TextField>
                    {/* Button ADD Matricules*/}
                    <IconButton sx={{ margin: 2 }} color='error' onClick={() => SetIsopenM(true)}>
                      <AddIcon />
                    </IconButton>
                    {/*        AddMatricule          */}
                    <AddMatricule open={isOpenM} >
                      <div>
                        <TextField
                          id="Add Matricule"
                          helperText="Please Saisir Matricule"
                          value={num}
                          onChange={(e) => setNum(e.target.value)}
                        >
                        </TextField>
                      </div>
                      <div>
                        <Button variant="contained" color="error" sx={{ margin: 2 }} onClick={() => SetIsopenM(false)}>
                          Annuler
                        </Button>
                        <Button variant="contained" color="success" onClick={AddMatriculeListe} >
                          Ajouter
                        </Button>
                      </div>
                    </AddMatricule>
                    {/*      -------------        */}
                    {/* -----  IconButton------------ */}
                    <TextField
                      id="select-Chauffeur"
                      select
                      label="Chauffeur"
                      name="Chauffeur"
                      value={chauffe}
                      helperText="Please select your Chauffeur"
                      onChange={(e) => setChauffe(e.target.value)}
                    >
                      {chauf.map((chau) => (
                        <MenuItem key={chau.ChauffeurId} value={chau.NomChauffeur}>
                          {chau.NomChauffeur}
                        </MenuItem>
                      ))}
                    </TextField>
                    {/* Button ADD Chauffeur */}
                    <IconButton sx={{ margin: 2 }} color='error' onClick={() => SetIsopenCh(true)}>
                      <AddIcon />
                    </IconButton>
                    {/*        AddChauffeur          */}
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
                        <Button sx={{ margin: 2 }} variant="contained" color="error" onClick={() => SetIsopenCh(false)}>
                          Annuler
                        </Button>
                        <Button variant="contained" color="success" >
                          Ajouter
                        </Button>

                      </div>
                    </AddChauffeur>
                    {/*      -------------        */}
                    {/* -----  IconButton------------ */}
                    <TextField
                      id="saisir-KM"
                      label="KM"
                      value={kilom}
                      name="KM"
                      helperText="Please Saisir KM"
                      onChange={(e) => setKilom(e.target.value)}
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
                      '& .MuiTextField-root': { m: 1 }
                    }
                  } >
                  <div>
                    <TextField
                      id="saisir-Details"
                      label="Etat Initial Avant Reparation"
                      helperText="Please Saisir Etat Initial "
                      value={ini}
                      name="EtatInitial"
                      onChange={(e) => setIni(e.target.value)}
                      rows={3}
                      multiline
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
                      value={des}
                      name="RepDescription"
                      rows={5}
                      onChange={(e) => setDes(e.target.value)}
                      multiline
                      style={{
                        width: '100ch',
                      }}
                    >
                    </TextField>

                    <TextField
                      id="select-Etat"
                      select
                      value={etatt}
                      label="Etat"
                      name="Etat"
                      helperText="Please select your Etat"
                      onChange={(e) => setEtatt(e.target.value)}
                    >
                      {etat.map((eta) => (
                        <MenuItem key={eta.EtatID} value={eta.NomEtat}>
                          {eta.NomEtat}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                </Box>
                <Button variant="contained" sx={{ mx: 100 }} color="error" onClick={HandlePoste}>
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
