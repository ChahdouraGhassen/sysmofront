import { Component } from 'react';
import {
  Button,
  Container,
  Grid,
  Divider,
} from '@mui/material';
import { Trash, Printer } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
class BonDeCommande extends Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state = { comma: [] }
  }
  MySwal = withReactContent(Swal)

  refreshList() {
    fetch(' https://localhost:44339/api/commande')
      .then(response => response.json())
      .then(data => {
        this.setState({ comma: data });
      })
  }
  componentDidMount() {
    this.refreshList();
  }
  componentDidUpdate() {
    this.refreshList();
  }
  DeleteReparation = (CommandeID, e) => {
    e.preventDefault();
    const id = CommandeID;
    Axios.delete('https://localhost:44339/api/commande/' + id).then(res => (
      this.MySwal.fire({
        title: <strong>Deleted Successfully</strong>,
        icon: 'success'
      }))).catch(err => console.log(err))
  }

  render() {
    const { comma } = this.state;
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
            <Link to='/AddBonDeCommande'>
              <Button variant="contained" color="error" sx={
                {
                  m: 2
                }
              }  >
                Ajouter Bon De Commande
              </Button>
            </Link>
            <Divider />
            <table className="table">
              <thead><tr>
                <th className="table-danger">Nom Piece</th>
                <th className="table-primary">Fournisseurs</th>
                <th className="table-secondary">Prix</th>
                <th className="table-success">Quantite en Stock</th>
                <th className="table-info">Actions</th>
              </tr>
              </thead>
              <tbody>
                {comma.map(comm =>
                  <tr key={comm.CommandeID}>
                    <td>{comm.NomPiece}</td>
                    <td>{comm.Fournisseur}</td>
                    <td>{comm.Prix}</td>
                    <td>{comm.Qte}</td>
                    <td><button className="btn btn-danger" onClick={(e) => this.DeleteReparation(comm.CommandeID, e)} ><Trash /></button>
                      <button className='btn btn-success'> <Printer /> </button></td>
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
export default BonDeCommande;