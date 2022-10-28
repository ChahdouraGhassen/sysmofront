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
import ReactToPrint from 'react-to-print';
import { InterventionPrint } from '../../print/InterventionPrint';
class Reparations extends Component<any, any>{
  componentRef = null;
  constructor(props: any) {
    super(props);
    this.state = { reps: [] }
  }
  MySwal = withReactContent(Swal)

  refreshList() {
    fetch('https://localhost:44339/api/reparation')
      .then(response => response.json())
      .then(data => {
        this.setState({ reps: data });
      })
  }
  componentDidMount() {
    this.refreshList();
  }
  componentDidUpdate() {
    this.refreshList();
  }
  DeleteReparation = (ReparationID, e) => {
    e.preventDefault();
    const id = ReparationID;
    Axios.delete('https://localhost:44339/api/reparation/' + id).then(res => (
      this.MySwal.fire({
        title: <strong>Deleted Successfully</strong>,
        confirmButtonText:
          <div>
            <ReactToPrint
              trigger={() => {
                return <a href="#">Print this out!</a>;
              }}
              content={() => this.componentRef}
            />
            <InterventionPrint ref={el => (this.componentRef = el)} />
          </div>,
      }))).catch(err => console.log(err))
  }
  render() {
    const { reps } = this.state;
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
            <Link to='/AddReparation'>
              <Button variant="contained" color="error" sx={
                {
                  m: 2
                }
              }  >
                Ajouter Réparation
              </Button>
            </Link>
            <Divider />
            <table className="table">
              <thead><tr>
                <th className="table-warning">Date</th>
                <th className="table-danger">Type</th>
                <th className="table-primary">Mécaniciens</th>
                <th className="table-secondary">Clients</th>
                <th className="table-success">Matricules</th>
                <th className="table-warning">Chauffeur</th>
                <th className="table-info">Actions</th>
              </tr>
              </thead>
              <tbody>
                {reps.map(rep =>
                  <tr key={rep.ReparationID}>
                    <td>{rep.Datee}</td>
                    <td>{rep.TypeRepar}</td>
                    <td>{rep.Mecanicien}</td>
                    <td>{rep.Client}</td>
                    <td>{rep.Matricule}</td>
                    <td>{rep.Chauffeur}</td>
                    <td><button className="btn btn-danger" onClick={(e) => this.DeleteReparation(rep.ReparationID, e)} ><Trash /></button>
                      <button className='btn btn-success'> <Printer /> </button>
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
}
export default Reparations;