//---------------------- import ----------------------------
import React, { FC, useEffect, useState } from 'react';
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
import {
  AiOutlineDelete,
  AiOutlineEdit
} from 'react-icons/ai'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import AddIcon from '@mui/icons-material/Add';
import Axios from 'axios';
import { Printer } from 'react-bootstrap-icons';
import { v4 as uuidv4 } from 'uuid';
//----------------------import pages---------------------------
import AddPiece from './modal/AddPiece';
import AddFournisseur from './modal/AddFournisseur';
//sweet alert 2
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const AddBonDeCommande: FC = () => {
  //------------------------
  const MySwal = withReactContent(Swal)
  //------------------------
  const [piec, setPiec] = useState('')
  const [fournisseur, setFournisseur] = useState('')
  const [qte, setQte] = useState('')
  const [prix, setPrix] = useState('')
  const [namef, setNameF] = useState('')
  const [telf, setTelF] = useState('')
  const [adressef, setAdresseF] = useState('')
  //------------------------
  const [pic, setPic] = useState('')
  const [fourr, setFourr] = useState('')
  const [prixx, setPrixx] = useState('')
  const [qtt, setQtt] = useState('')
  const [piece, setPiece] = useState([])
  const [prixt, setPrixT] = useState('')
  const [totales, setTotales] = useState(0)
  //-----------liste 
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [nomp, setNomP] = useState('')
  const [fournisseurl, setFournisseurL] = useState('')
  const [quantitel, setQuantiteL] = useState('')
  const [prixl, setPrixL] = useState('')
  useEffect(() => {
    fetch('https://localhost:44339/api/piece')
      .then(response => response.json())
      .then(data => {
        setPiece(data);
      });
  }, []);
  //------------ Fournisseur --------
  const [fourni, setFourni] = useState([])
  useEffect(() => {
    fetch('https://localhost:44339/api/fournisseur')
      .then(response => response.json())
      .then(data => {
        setFourni(data);
      });
  }, []);
  //----------------------------------
  const postPiece = (e) => {
    e.preventDefault();
    Axios.post('https://localhost:44339/api/piece', {
      NamePiece: piec,
      QteStock: qte,
      Prix: prix,
      Fournisseur: fournisseur
    }).then(res => (
      setPiec(""),
      setQte(""),
      setPrix(""),
      setFournisseur(""),
      SetIsopenP(false),
      MySwal.fire({
        title: <strong>Added Successfully</strong>,
        icon: 'success'
      }))
    ).catch(err => console.log(err))
  }
  //-------------------------------------
  const postFournisseur = (e) => {
    e.preventDefault();
    Axios.post('https://localhost:44339/api/fournisseur', {
      NameFournisseur: namef,
      TelFournisseur: telf,
      AdresseFournisseur: adressef
    }).then(res => (
      setNameF(""),
      setTelF(""),
      setAdresseF(""),
      SetIsopenF(false),
      MySwal.fire({
        title: <strong>Added Successfully</strong>,
        icon: 'success'
      }))
    ).catch(err => console.log(err))
  }
  ///////
  const HandlePoste = (e) => {
    e.preventDefault();
    Axios.post('https://localhost:44339/api/commande', {
      NomPiece: nomp,
      Fournisseur: fournisseurl,
      Qte: quantitel,
      Prix: totales
    }).then(res => (setPic(""), setFourr(""), setList([]), setPrixx(""), setTotales(0),
      console.log(list),
      MySwal.fire({
        title: <strong>Added Successfully</strong>,
        confirmButtonText:
          <Printer />,
        icon: 'success'
      }))).catch(err => console.log(err))
  }
  //--------------
  const [isOpenP, SetIsopenP] = useState(false)
  const [isOpenF, SetIsopenF] = useState(false)
  //------------------------
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!pic || !fourr || !prixx || !qtt) {
      Swal.fire(
        'The Internet?',
        'That thing is still around?',
        'question'
      )
    } else {
      const newItems = {
        id: uuidv4(),
        pic,
        fourr,
        prixx,
        qtt,
        prixt
      }
      setPic("")
      setFourr("")
      setPrixx("")
      setQtt("")
      setPrixT("")
      setList([...list, newItems])
      setIsEditing(false)
    }
  }
  //-----------------delete row
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
    setFourr(editingRow.fourr)
    setPrixx(editingRow.prixx)
    setQtt(editingRow.qtt)
  }
  //--------------function calculate prix totale
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
  //-----------------function calculate totale table
  useEffect(() => {
    let rows = (document.querySelectorAll(".prixtotale")) as any
    let sum = 0
    for (let i = 0; i < rows.length; i++) {
      sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
      setTotales(sum)
    }
  })
  useEffect(() => {
    let rows = (document.querySelectorAll(".pieceliste")) as any
    let sum = ""
    for (let i = 0; i < rows.length; i++) {
      sum += "," + rows[i].innerHTML
      setNomP(sum)
    }
  })
  useEffect(() => {
    let rows = (document.querySelectorAll(".fournisseurliste")) as any
    let sum = ""
    for (let i = 0; i < rows.length; i++) {
      sum += "," + rows[i].innerHTML
      setFournisseurL(sum)
    }
  })
  useEffect(() => {
    let rows = (document.querySelectorAll(".quantite")) as any
    let sum = ""
    for (let i = 0; i < rows.length; i++) {
      sum += "," + rows[i].innerHTML
      setQuantiteL(sum)
    }
  })
  useEffect(() => {
    let rows = (document.querySelectorAll(".prixliste")) as any
    let sum = ""
    for (let i = 0; i < rows.length; i++) {
      sum += "," + rows[i].innerHTML
      setPrixL(sum)
    }
  })

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
              <CardHeader title="Bon De Commande" />
              <Divider />
              <CardContent>
                <Box
                  component="form"
                  onSubmit={HandleSubmit}
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '30ch' }
                  }}
                >
                  <div>
                    <TextField
                      id="select-Piece"
                      select
                      value={pic}
                      label="Nom Piece"
                      helperText="Please select your Piece"
                      onChange={(e) => setPic(e.target.value)}
                    >
                      {piece.map((pie) => (
                        <MenuItem key={pie.PieceID} value={pie.NamePiece}>
                          {pie.NamePiece}
                        </MenuItem>
                      ))}
                    </TextField>
                    {/* Button ADD Pieces*/}
                    <IconButton sx={{ margin: 2 }} color='error' onClick={() => SetIsopenP(true)}>
                      <AddIcon />
                    </IconButton>
                    {/*        AddPiece        */}
                    <AddPiece open={isOpenP} >
                      <div >
                        <TextField
                          id="AddPiece"
                          label="Nom Piece"
                          value={piec}
                          helperText="Please Saisir Nom De Piece"
                          onChange={(e) => setPiec(e.target.value)}
                        >
                        </TextField>
                        <TextField
                          id="AddQte"
                          label="Quantite"
                          value={qte}
                          helperText="Please Saisir Quantite"
                          onChange={(e) => setQte(e.target.value)}
                        >
                        </TextField>
                        <TextField
                          id="FourId"
                          label="Fournisseur"
                          value={fournisseur}
                          helperText="Please Saisir Fournisseur"
                          onChange={(e) => setFournisseur(e.target.value)}
                        >
                        </TextField>
                        <TextField
                          id="PrixID"
                          label="Prix"
                          value={prix}
                          helperText="Please Saisir Prix"
                          onChange={(e) => setPrix(e.target.value)}
                        >
                        </TextField>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <Button sx={{ margin: 2 }} variant="contained" color="error" onClick={() => SetIsopenP(false)}>
                          Annuler
                        </Button>
                        <Button variant="contained" color="success" onClick={postPiece}  >
                          Ajouter
                        </Button>
                      </div>
                    </AddPiece>
                    {/*      ---------------------------        */}
                    {/*-------------  Fournisseur -----------------------*/}
                    <TextField
                      id="select-Fournisseur"
                      select
                      value={fourr}
                      label="Fournisseur"
                      helperText="Please Select Fournisseur"
                      onChange={(e) => setFourr(e.target.value)}
                    >
                      {fourni.map((four) => (
                        <MenuItem key={four.FournisseurID} value={four.NameFournisseur}>
                          {four.NameFournisseur}
                        </MenuItem>
                      ))}
                    </TextField>
                    <IconButton sx={{ margin: 2 }} color='error' onClick={() => SetIsopenF(true)}>
                      <AddIcon />
                    </IconButton>
                    {/*------------------------------------------------------ */}

                    <AddFournisseur open={isOpenF} >
                      <div >
                        <TextField
                          id="NomFournisseur"
                          label="Name Fournisseur"
                          value={namef}
                          helperText="Please Saisir Name Fournisseur"
                          onChange={(e) => setNameF(e.target.value)}
                        >
                        </TextField>
                      </div>
                      <div >
                        <TextField
                          id="TelFour"
                          label="Tel "
                          value={telf}
                          helperText="Please Saisir Tel"
                          onChange={(e) => setTelF(e.target.value)}
                        >
                        </TextField>
                        <TextField
                          id="AdresseFourn"
                          label="Adresse"
                          value={adressef}
                          helperText="Please Saisir Adresse"
                          onChange={(e) => setAdresseF(e.target.value)}
                        >
                        </TextField>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <Button sx={{ margin: 2 }} variant="contained" color="error" onClick={() => SetIsopenF(false)}>
                          Annuler
                        </Button>
                        <Button variant="contained" color="success" onClick={postFournisseur}  >
                          Ajouter
                        </Button>
                      </div>
                    </AddFournisseur>
                    {/*----------------  --------------------------------- */}
                    <TextField
                      id="PrixFourni"
                      label="Prix Fournisseur (TND)"
                      value={prixx}
                      helperText="Please Saisir Prix Fournisseur (TND) "
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
                  </div>
                  <div>
                    <TextField
                      id="select-QteStock"
                      type="number"
                      disabled
                      helperText="Quantite Stock"
                      style={{
                        width: "20ch"
                      }}
                    >
                    </TextField>
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
                    <button type="submit" className='btn btn-success m-3'>
                      {isEditing ? "Modifier" : "Ajouter Autre Pièce"}
                    </button>
                  </div>
                  <table width="80%" className='mb-20' >
                    <thead>
                      <tr className='bg-gray-100 p-1 text-center'>
                        <th>Nom Piece</th>
                        <th>Fournisseur</th>
                        <th>Prix Fournisseur</th>
                        <th>Quantite</th>
                        <th>Prix Totale</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody className='text-center'>
                      {list.map((list) => (
                        <React.Fragment key={list.id}>
                          <tr >
                            <td className='pieceliste'>{list.pic}</td>
                            <td className='fournisseurliste'>{list.fourr}</td>
                            <td className='prixliste'>{list.prixx}</td>
                            <td className="quantite">{list.qtt}</td>
                            <td className="prixtotale">{list.prixt}</td>
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
                      value={totales}
                      helperText="Somme Totale (TND)"
                      style={{
                        width: "20ch",
                        marginTop: "15%"
                      }}
                    >
                      {totales}
                    </TextField>
                  </div>
                </Box>
                <Button variant="contained" sx={{ mx: 100, width: 180 }} color="error" onClick={HandlePoste}>
                  Ajouter Commande
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