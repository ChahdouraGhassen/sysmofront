//---------------------- import ----------------------------
import React, { FC, useState, useEffect } from 'react';
import {
  Button,
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider,
  SelectChangeEvent
} from '@mui/material';
import {
AiOutlineDelete,
AiOutlineEdit
} from 'react-icons/ai'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { Trash, Printer, Pencil, Key } from 'react-bootstrap-icons';
//-----------------------
//sweet alert 2
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const AddBonDeTravail: FC = () => {
  const MySwal = withReactContent(Swal)
  const [chauf, setChauf] = useState([])
  const [matricul, setMatricul] = useState('')
  const [chauff, setChauff] = useState('')
  const [piec, setPiec] = useState('')
  const [tach, setTach] = useState('')
  const [meca, setMeca] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
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
  const [mecanicien, setMecanicien] = useState([])
  useEffect(() => {
    fetch('https://localhost:44339/api/mecanicien')
      .then(response => response.json())
      .then(data => {
        setMecanicien(data);

      });
  }, []);
  const [piece, setPiece] = useState([])
  useEffect(() => {
    fetch('https://localhost:44339/api/piece')
      .then(response => response.json())
      .then(data => {
        setPiece(data);

      });
  }, []);
  const [type, setType] = useState([])
  useEffect(() => {
    fetch('https://localhost:44339/api/typereparation')
      .then(response => response.json())
      .then(data => {
        setType(data);

      });
  }, []);
  const postData = (e) => {
    e.preventDefault();


    Axios.post('https://localhost:44339/api/travail', {
      Matricule: matricul,
      Chauffeur: chauff,
      Piece: piec,
      Tache: tach,
      Mecanicien: meca
    }).then(
      res => (setMatricul(""), setChauff(""), setPiec(""), setTach(""), setMeca(""),
        console.log(list[tach]),
        MySwal.fire({
          title: <strong>Added Successfully</strong>,
          confirmButtonText:
            <Printer />,
          icon: 'success'
        }))
    ).catch(err => console.log(err))
  }
  const HandleSubmit = (e) => {
    e.preventDefault();
    const newItems = {
      id: uuidv4(),
      tach,
      meca,
      piec
    }
    setTach("")
    setMeca("")
    setPiec("")
    setList([...list, newItems])
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
    setTach(editingRow.tach)
    setMeca(editingRow.meca)
    setPiec(editingRow.piec)
  }
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
              <CardHeader title="Bon De Travail" />
              <Divider />
              <CardContent>
                <Box
                  component="form"
                  onSubmit={HandleSubmit}
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '27ch' }
                  }}
                >
                  <div>
                    <TextField
                      id="select-matricule"
                      select
                      value={matricul}
                      label="matricule"
                      helperText="Please select Matricules"
                      onChange={(e) => setMatricul(e.target.value)}
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
                      value={chauff}
                      label="Chauffeurs"
                      helperText="Please select Chauffeurs"
                      onChange={(e) => setChauff(e.target.value)}
                    >
                      {chauf.map((chau) => (
                        <MenuItem key={chau.ChauffeurId} value={chau.NomChauffeur}>
                          {chau.NomChauffeur}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                  <div>
                    <TextField
                      id="filled-select-tache"
                      select
                      value={tach}
                      label="tache"
                      helperText="Please select tache"
                      onChange={(e) => setTach(e.target.value)}
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
                      value={meca}
                      label="Mecanicien"
                      helperText="Please select Mecanicien"
                      onChange={(e) => setMeca(e.target.value)}
                    >
                      {mecanicien.map((mec) => (
                        <MenuItem key={mec.MecanicienID} value={mec.NameMecanicien}>
                          {mec.NameMecanicien}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      id="Pieces"
                      select
                      label="Pieces"
                      value={piec}
                      helperText="Please select Piece "
                      onChange={(e) => setPiec(e.target.value)}
                    >
                      {piece.map((pie) => (
                        <MenuItem key={pie.PieceID} value={pie.NamePiece}>
                          {pie.NamePiece}
                        </MenuItem>
                      ))}
                    </TextField>
                    {/* Button ADD taches*/}
                    <button type='submit' className='btn btn-success m-3'>Ajouter Tache</button>
                    {/* ----------------- */}
                  </div>
                  <table width="80%" className='mb-20' >
                    <thead>
                      <tr className='bg-gray-100 p-1 text-center'>
                        <th>Tache</th>
                        <th>Mecanicien</th>
                        <th>Pieces</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody className='text-center'>
                      {list.map((list) => (
                        <React.Fragment key={list.id}>
                          <tr >
                            <td>{list.tach}</td>
                            <td>{list.meca}</td>
                            <td>{list.piec}</td>
                            <td>
                              <Button color="error" onClick={() => DeleteRow(list.id)}><AiOutlineDelete /></Button>
                              <Button color="success" onClick={() => editRow(list.id)}> <AiOutlineEdit /> </Button>
                            </td>
                          </tr>
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </Box>
                <Button variant="contained" sx={{ mx: 100 }} color="error" onClick={postData}  >
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