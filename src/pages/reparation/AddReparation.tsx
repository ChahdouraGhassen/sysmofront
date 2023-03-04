import React, { FC, useState, useEffect } from 'react';
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
  SelectChangeEvent
} from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import AddIcon from '@mui/icons-material/Add';
import { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import Axios from 'axios';
import {
  AiOutlineDelete,
  AiOutlineEdit
} from 'react-icons/ai'
import { v4 as uuidv4 } from 'uuid';

//----------------------import Page---------------------------
import AddType from './modal/AddType';
import AddMatricule from './modal/AddMatricule';
import AddClient from './modal/AddClient';
import AddChauffeur from './modal/AddChauffeur';
//sweet alert 2
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
//
const AddReparation: FC = () => {
  const MySwal = withReactContent(Swal)
  //
  const [chauf, setChauf] = useState([])
  const [typerpar, setTyperpar] = useState<string[]>([])
  const [clientt, setClientt] = useState("")
  const [matri, setMatri] = useState("")
  const [chauffe, setChauffe] = useState("")
  const [kilom, setKilom] = useState("")
  const [ini, setIni] = useState("")
  const [des, setDes] = useState("")
  const [etatt, setEtatt] = useState("")
  const [namerepar, setNameRepar] = useState("")
  const [piece, setPiece] = useState([])
  const [pic, setPic] = useState("")
  const [prixx, setPrixx] = useState("")
  const [qtt, setQtt] = useState("")
  const [prixt, setPrixT] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const [list, setList] = useState([])
  const [totalp, setTotalP] = useState(0)
  //Client Add
  const [clientn, setClientN] = useState("")
  const [nvsclient, setNvsclient] = useState("")
  const [emp, setEmp] = useState("")
  const [tel, setTel] = useState("")
  //matriculeAdd
  const [num, setNum] = useState("")
  const [mise, setMise] = useState("")
  const [marque, setMarque] = useState("")
  const [nss, setNss] = useState("")

  //liste
  const [listepic, setListePic] = useState("")
  const [listepri, setListePri] = useState("")
  const [listeqtt, setListeQtt] = useState("")
  //date
  const [value, setValue] = useState<Dayjs | null>(null);
  const [datefin, setDateFin] = useState<Dayjs | null>(null);
  useEffect(() => {
    fetch('https://localhost:44339/api/piece')
      .then(response => response.json())
      .then(data => {
        setPiece(data);
      });
  }, []);

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
  //
  const HandlePoste = (e) => {
    e.preventDefault();
    Axios.post('https://localhost:44339/api/reparation', {
      TypeRepar: typerpar.toString(),
      Datefin: datefin.format('DD/MM/YYYY').toString(),
      Client: clientt,
      Matricule: matri,
      Chauffeur: chauffe,
      KM: kilom,
      EtatInitial: ini,
      RepDescription: des,
      Etat: etatt,
      Datee: value.format('DD/MM/YYYY').toString(),
      piece: listepic,
      quantite: listeqtt,
      prix: listepri,
      prixt: totalp
    }).then(res => (setTyperpar([""]), setClientt(""), setMatri(""), setChauffe(""), setKilom(""), setIni(""), setDes(""), setEtatt(""),
      SetIsopenC(false),
      MySwal.fire({
        title: <strong>Added Successfully</strong>,
        icon: 'success'
      })
    )).catch(err => console.log(err))
  }
  //Type Reparation
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
    Axios.post('https://localhost:44339/api/matricule', {
      NumeroMatricule: num,
      DateMS: mise,
      Marque: marque,
      NS: nss
    }).then(res => (setNum(""), setEmp(""), setTel(""), setNss(""),
      SetIsopenC(false),
      MySwal.fire({
        title: <strong>Added Successfully</strong>,
        icon: 'success'
      }))
    ).catch(err => console.log(err))
  }
  const DeleteRow = (id) => {
    setList(list.filter((row =>
      row.id !== id)))
  }
  //---------------edit row
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id)
    setList(list.filter((row => row.id !== id)))
    setIsEditing(true)
    setPic(editingRow.pic)
    setPrixx(editingRow.prixx)
    setQtt(editingRow.qtt)
  }
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!pic || !prixx || !qtt) {
      Swal.fire(
        'The Internet?',
        'That thing is still around?',
        'question'
      )
    }
    else {
      const newItems = {
        id: uuidv4(),
        pic,
        prixx,
        qtt,
        prixt
      }
      setPic("")
      setPrixx("")
      setQtt("")
      setPrixT("")
      setList([...list, newItems])
      setIsEditing(false)
    }
  }
  useEffect(() => {
    const CalculatePrixT = (prixt) => {
      const prf = parseInt(prixx)
      const qt = parseInt(qtt)
      const tt = prf * qt
      const tts = tt.toString()
      setPrixT(tts)
    }
    CalculatePrixT(prixt)
  }, [prixt, prixx, qtt, setPrixT])
  // calculate total table prix
  useEffect(() => {
    let rows = (document.querySelectorAll(".prixt")) as any
    let sum = 0
    for (let i = 0; i < rows.length; i++) {
      sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
      setTotalP(sum)
    }
  })
  useEffect(() => {
    let rows = (document.querySelectorAll(".listepiece")) as any
    let sum = ""
    for (let i = 0; i < rows.length; i++) {
      sum += "," + rows[i].innerHTML
      setListePic(sum)
    }
  })
  useEffect(() => {
    let rows = (document.querySelectorAll(".listeprix")) as any
    let sum = ""
    for (let i = 0; i < rows.length; i++) {
      sum += "," + rows[i].innerHTML
      setListePri(sum)
    }
  })
  useEffect(() => {
    let rows = (document.querySelectorAll(".listeqtt")) as any
    let sum = ""
    for (let i = 0; i < rows.length; i++) {
      sum += "," + rows[i].innerHTML
      setListeQtt(sum)
    }
  })

  //---------------------------add type ,Matricule ,mecaniciens,client---------------
  const [isOpen, SetIsopen] = useState(false);
  const [isOpenM, SetIsopenM] = useState(false);
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
                        label="Date Début"
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Date de Fin"
                        value={datefin}
                        onChange={(newValue) => {
                          setDateFin(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                    <Select
                      id="select-typ"
                      value={typerpar}
                      multiple
                      name="TypeRepar"
                      label="Type"
                      onChange={handleChange}
                      style={
                        {
                          width: "15%",
                        }
                      }
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
                        <TextField
                          id="addmarquebus"
                          helperText="Please Saisir Marque Bus"
                          value={marque}
                          onChange={(e) => setMarque(e.target.value)}
                        >
                        </TextField>
                        <TextField
                          id="addmise"
                          helperText="Please Saisir MISE EN CIR Bus"
                          value={mise}
                          onChange={(e) => setMise(e.target.value)}
                        >
                        </TextField>
                        <TextField
                          id="addnumeroserie"
                          helperText="Please Saisir N°SERIE Bus"
                          value={nss}
                          onChange={(e) => setNss(e.target.value)}
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
                        width: '110ch',
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
                        width: '110ch',
                      }}
                    >
                    </TextField>

                  </div>
                  <Box
                    sx={{
                      '& .MuiTextField-root': { m: 1, width: '40ch' }
                    }}
                  >
                    <div>
                      <TextField
                        id="select-Piece"
                        select
                        value={pic}
                        label="Nom Piece"
                        helperText="Please select Piece"
                        onChange={(e) => setPic(e.target.value)}
                      >
                        {piece.map((pie) => (
                          <MenuItem key={pie.PieceID} value={pie.NamePiece}>
                            {pie.NamePiece}
                          </MenuItem>
                        ))}
                      </TextField>
                      <TextField
                        id="PrixFourni"
                        label="Prix (TND)"
                        value={prixx}
                        helperText="Please Saisir Prix (TND) "
                        style={{
                          width: "20ch"
                        }}
                        onChange={(e) => setPrixx(e.target.value)}
                      >
                      </TextField>
                      <TextField
                        id="select-qte"
                        type="number"
                        helperText="Quantite"
                        style={{
                          width: "8ch"
                        }}
                        value={qtt}
                        onChange={(e) => setQtt(e.target.value)}
                      />
                      <TextField
                        id="PrixTotale"
                        type="number"
                        disabled
                        value={prixt}
                        helperText="Prix Totale"
                        style={{
                          width: "20ch"
                        }}
                      >
                        {prixt}
                      </TextField>
                      <button onClick={HandleSubmit} className='btn btn-success m-3'>
                        {isEditing ? "Modifier" : "Ajouter Autre Pièce"}
                      </button>
                    </div>
                    <table width="80%" className='mb-20' >
                      <thead>
                        <tr className='bg-gray-100 p-1 text-center'>
                          <th>Nom Piece</th>
                          <th>Prix </th>
                          <th>Quantite</th>
                          <th>Prix Totale</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody className='text-center'>
                        {list.map((list) => (
                          <React.Fragment key={list.id}>
                            <tr >
                              <td className="listepiece">{list.pic}</td>
                              <td className="listeprix">{list.prixx}</td>
                              <td className="listeqtt">{list.qtt}</td>
                              <td className="prixt">{list.prixt}</td>
                              <td>
                                <IconButton color="error" onClick={() => DeleteRow(list.id)}><AiOutlineDelete /></IconButton>
                                <IconButton color="success" onClick={() => editRow(list.id)}> <AiOutlineEdit /> </IconButton>
                              </td>
                            </tr>
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                    <div>
                      <TextField
                        id="Somme Totale"
                        type="number"
                        disabled
                        value={totalp}
                        helperText="Somme Totale (TND)"
                        style={{
                          width: "20ch",
                          marginTop: "15%"
                        }}
                      >
                        {totalp}
                      </TextField>
                    </div>
                  </Box>
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
