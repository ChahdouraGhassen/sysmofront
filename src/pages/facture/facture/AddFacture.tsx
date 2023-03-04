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
    IconButton
} from '@mui/material';
import {
    AiOutlineDelete,
    AiOutlineEdit
} from 'react-icons/ai'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Axios from 'axios';
import { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { v4 as uuidv4 } from 'uuid';
import { Trash, Printer, Pencil, Key } from 'react-bootstrap-icons';
//-----------------------
//sweet alert 2
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const AddFacture: FC = () => {
    //swal
    const MySwal = withReactContent(Swal)
    //date
    const [value, setValue] = useState<Dayjs | null>(null);
    const [client, setClient] = useState([]);
    const [cli, setCli] = useState("");
    const [matri, setMatri] = useState("");
    const [matricule, setMatricule] = useState([]);
    const [kmf, setKmf] = useState("");
    const [ref, setRef] = useState("");
    const [descrip, setDescrip] = useState("");
    const [qtt, setQtt] = useState("");
    const [list, setList] = useState([]);
    const [tva, setTva] = useState("");
    const [prixx, setPrixx] = useState("");
    const [prixt, setPrixT] = useState("");
    const [totalp, setTotalP] = useState(0);
    const [totaltva, setTotaltva] = useState(0);

    const [isEditing, setIsEditing] = useState(false)
    useEffect(() => {
        fetch('https://localhost:44339/api/matricule')
            .then(response => response.json())
            .then(data => {
                setMatricule(data);
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
    useEffect(() => {
        fetch('https://localhost:44339/api/client')
            .then(response => response.json())
            .then(data => {
                setClient(data);
            });
    }, []);
    const postData = (e) => {
        e.preventDefault();
        Axios.post('https://localhost:44339/api/facture', {
            date: value,
            client: cli,
            matricule: matri,
            kmf: kmf,
            refe: ref,
            designation: descrip,
            qte: qtt,
            tva: tva
        }).then(
            res => (setMatri(""),
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
        if (!ref || !descrip || !qtt || !prixx) {
            Swal.fire(
                'The Internet?',
                'That thing is still around?',
                'question'
            )
        }
        else {
            const newItems = {
                id: uuidv4(),
                ref,
                descrip,
                qtt,
                prixx
            }
            setRef("")
            setDescrip("")
            setQtt("")
            setPrixx("")
            setList([...list, newItems])
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
        setRef(editingRow.ref)
        setDescrip(editingRow.descrip)
        setQtt(editingRow.qtt)
        setPrixx(editingRow.prixx)
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
    useEffect(() => {
        let rows = (document.querySelectorAll(".prixt")) as any
        let sum = 0
        for (let i = 0; i < rows.length; i++) {
            sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
            setTotalP(sum)
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
                            <CardHeader title="Ajouter Facture" />
                            <Divider />
                            <CardContent>
                                <Box
                                    component="form"
                                    onSubmit={HandleSubmit}
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '27ch' }
                                    }}
                                >
                                    <div style={{ textAlign: 'center' }}>
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
                                        <TextField
                                            id="select-Client"
                                            select
                                            value={cli}
                                            label="Client"
                                            helperText="Please select Client"
                                            onChange={(e) => setCli(e.target.value)}
                                        >
                                            {client.map((cli) => (
                                                <MenuItem key={cli.ClientId} value={cli.Identification}>
                                                    {cli.Identification}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        <TextField
                                            id="select-Matricule"
                                            select
                                            value={matri}
                                            label="Matricule"
                                            helperText="Please select Matricule"
                                            onChange={(e) => setMatri(e.target.value)}
                                        >
                                            {matricule.map((mat) => (
                                                <MenuItem key={mat.id} value={mat.NumeroMatricule}>
                                                    {mat.NumeroMatricule}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        <TextField
                                            id="select-km"
                                            value={kmf}
                                            label="KM Sortie"
                                            helperText="Please select KM Sortie"
                                            onChange={(e) => setKmf(e.target.value)}
                                        >
                                        </TextField>
                                    </div>
                                    <div>
                                        <TextField
                                            id="reference"
                                            value={ref}
                                            label="Reference"
                                            helperText="Please select Reference"
                                            onChange={(e) => setRef(e.target.value)}
                                        >
                                        </TextField>
                                        <TextField
                                            id="select-description"
                                            value={descrip}
                                            label="Description"
                                            helperText="Please select Description"
                                            onChange={(e) => setDescrip(e.target.value)}
                                        >
                                        </TextField>
                                        <TextField
                                            id="PrixFourni"
                                            label="Prix HT(TND)"
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
                                        {/* Button ADD taches*/}
                                        <button type='submit' className='btn btn-success m-3'>Ajouter Tache</button>
                                        <TextField
                                            id="saisir TVA"
                                            helperText="TVA %"
                                            style={{
                                                width: "8ch"
                                            }}
                                            onChange={(e) => setTva(e.target.value)}
                                        >
                                        </TextField>
                                        {/* ----------------- */}
                                    </div>
                                    <table width="100%" className='mb-20' >
                                        <thead>
                                            <tr className='bg-gray-100 p-1 text-center'>
                                                <th>Ref</th>
                                                <th>Description</th>
                                                <th>QTE</th>
                                                <th>Total HT</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className='text-center'>
                                            {list.map((list) => (
                                                <React.Fragment key={list.id}>
                                                    <tr >
                                                        <td>{list.ref}</td>
                                                        <td>{list.descrip}</td>
                                                        <td>{list.qtt}</td>
                                                        <td className='prixt'>{list.prixx}</td>
                                                        <td>
                                                            <IconButton color="error" onClick={() => DeleteRow(list.id)}><AiOutlineDelete /></IconButton>
                                                            <IconButton color="success" onClick={() => editRow(list.id)}> <AiOutlineEdit /> </IconButton>
                                                        </td>
                                                    </tr>
                                                </React.Fragment>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'flex-end'
                                    }}>
                                        <TextField
                                            id="Somme Totale"
                                            type="number"
                                            disabled
                                            value={totalp}
                                            helperText="Brut HT"
                                            style={{
                                                width: "20ch",
                                                marginTop: "15%"
                                            }}
                                        >
                                            {totalp}
                                        </TextField>
                                        <TextField
                                            id="Somme TVA"
                                            type="number"
                                            disabled
                                            value={totaltva}
                                            helperText="TVA"
                                            style={{
                                                width: "20ch",
                                                marginTop: "15%",
                                                textAlign: "center"
                                            }}
                                        >
                                        </TextField>
                                    </div>
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
export default AddFacture;