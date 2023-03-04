import { Component } from 'react';
import {
  Button,
  Container,
  Grid,
  Divider,
  IconButton
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Trash, Printer } from 'react-bootstrap-icons';
import Axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
class BonDetravil extends Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state = { travail: [] }
  }
  MySwal = withReactContent(Swal)
  refreshList() {
    fetch('https://localhost:44339/api/travail')
      .then(response => response.json())
      .then(data => {
        this.setState({ travail: data });
      })
  }
  componentDidMount() {
    this.refreshList();
  }
  componentDidUpdate() {
    this.refreshList();
  }
  DeleteReparation = (TravailID, e) => {
    e.preventDefault();
    const id = TravailID;
    Axios.delete('https://localhost:44339/api/travail/' + id).then(res => (
      this.MySwal.fire({
        title: <strong>Deleted Successfully</strong>,
        icon: 'success'
      }))).catch(err => console.log(err))
  }
  render() {
    const { travail } = this.state;
    return (
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
            <Link to='/AddBonDeTravail'>
              <Button variant="contained" color="error" sx={
                {
                  m: 2
                }
              }  >
                Ajouter Bon De Travail
              </Button>
            </Link>
            <Divider />
            <table className="table">
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th className="table-danger">Matricule</th>
                  <th className="table-primary">Chauffeur</th>
                  <th className="table-secondary">Mécaniciens</th>
                  <th className="table-success">Pièces</th>
                  <th className="table-warning">Taches</th>
                  <th className="table-info">Actions</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                {travail.map(trav =>
                  <tr key={trav.TravailID}>
                    <td>{trav.Matricule}</td>
                    <td>{trav.Chauffeur}</td>
                    <td>{trav.Mecanicien}</td>
                    <td>{trav.Pieces}</td>
                    <td>{trav.Tache}</td>
                    <td>
                      <IconButton color="error" onClick={(e) => this.DeleteReparation(trav.TravailID, e)} ><Trash /></IconButton>
                      <IconButton color="primary"> <Printer /> </IconButton> </td>
                  </tr>
                )}
              </tbody>
            </table>
          </Grid>
        </Grid>
      </Container>
    )
  }
}
export default BonDetravil;