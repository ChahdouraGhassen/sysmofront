import React, { FC, useState, useEffect } from 'react';
import {
  Button,
  Container,
  Grid,
  Divider,
  IconButton,
} from '@mui/material';
import { Printer, EyeFill } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
const Facture: FC = () => {
  const [liv, setLiv] = useState([])
  const navigate = useNavigate();
  const Printbutton = (e, Datee, Client, Matricule, Prixt) => {
    e.preventDefault();
    navigate("/PrintBon", { state: { Datee, Client, Matricule, Prixt } });
  }
  useEffect(() => {
    fetch('https://192.168.1.26:44339/api/reparation')
      .then(response => response.json())
      .then(data => {
        setLiv(data);
      });
  }, []);
  return (
    <div>
      <Container>
        <Grid>
          <Grid
            container
            sx={
              {
                m: 2
              }
            }
          >
            <Link to='/addfacture'>
              <Button variant="contained" color="error" sx={
                {
                  m: 2
                }
              }
              >
                Ajouter Facture
              </Button>
            </Link>
            <Divider />
            <table className="table">
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th className="table-danger">Date</th>
                  <th className="table-primary">Client</th>
                  <th className="table-secondary">Matricule</th>
                  <th className="table-primary">Prix HT</th>
                  <th className="table-danger">Prix Totale</th>
                  <th className="table-info">Actions</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                {liv.map(livs =>
                  <tr key={livs.ReparationID}>
                    <td>{livs.Datee}</td>
                    <td>{livs.Client}</td>
                    <td>{livs.Matricule}</td>
                    <td>{livs.prixt + " TND"}</td>
                    <td>{(parseInt(livs.prixt) * 0.19) + parseInt(livs.prixt) + " TND "}</td>
                    <td>
                      <IconButton color="primary" onClick={(e) => Printbutton(e, livs.Datee, livs.Client, livs.Matricule, livs.prixt)}> <Printer /> </IconButton>
                      <IconButton> <EyeFill /> </IconButton></td>
                  </tr>
                )}
              </tbody>
            </table>
          </Grid>
        </Grid>
      </Container>
    </div>


  );
}
export default Facture;

