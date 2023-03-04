import React, { useState, useEffect } from 'react';
import {
  Button,
  Container,
  Grid,
  Divider,
  IconButton
} from '@mui/material';
import { Trash, Printer } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Swal from 'sweetalert2'

function Reparations() {
  const [reps, setReps] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    refreshList();
  }, []);

  const refreshList = () => {
    fetch('https://localhost:44339/api/reparation')
      .then(response => response.json())
      .then(data => {
        setReps(data);
      })
  }
  const DeleteReparation = (ReparationID, e) => {
    e.preventDefault();
    const id = ReparationID;
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete('https://localhost:44339/api/reparation/' + id)
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
      .catch(err => console.log(err))
  }

  const PrintFunction = (Datee, TypeRepar, Datefin, Client, Matricule, Chauffeur, RepDescription, EtatInitial, KM, e) => {
    e.preventDefault();
    navigate("/Print", { state: { Datee, TypeRepar, Datefin, Client, Matricule, Chauffeur, RepDescription, EtatInitial, KM } });
  }
  return (
    <Container>
      <Grid>
        <Grid
          container
          sx={{
            m: 2
          }}
        >
          <Link to='/AddReparation'>
            <Button variant="contained" color="error" sx={{
              m: 2
            }}>
              Ajouter Réparation
            </Button>
          </Link>
          <Divider />
          <table className="table">
            <thead>
              <tr style={{ textAlign: "center" }}>
                <th className="table-warning">Date Début</th>
                <th className="table-danger">Date de Fin</th>
                <th className="table-primary">Type Réparation</th>
                <th className="table-secondary">Clients</th>
                <th className="table-success">Matricules</th>
                <th className="table-warning">Chauffeur</th>
                <th className="table-info">Actions</th>
              </tr>
            </thead>
            <tbody style={{ textAlign: "center" }}>
              {reps.map(rep =>
                <tr key={rep.ReparationID}>
                  <td>{rep.Datee}</td>
                  <td>{rep.Datefin}</td>
                  <td>{rep.TypeRepar}</td>
                  <td>{rep.Client}</td>
                  <td>{rep.Matricule}</td>
                  <td>{rep.Chauffeur}</td>
                  <td>
                    <IconButton color="error" onClick={(e) => DeleteReparation(rep.ReparationID, e)} ><Trash /></IconButton>
                    <IconButton color="primary" onClick={(e) => PrintFunction(rep.Datee, rep.TypeRepar, rep.Datefin, rep.Client, rep.Matricule, rep.Chauffeur, rep.EtatInitial, rep.RepDescription, rep.KM, e)}> <Printer /> </IconButton>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </Grid>
      </Grid>
    </Container>
  )
}
export default Reparations;