import {Component} from 'react';
import {
  Button,
  Container,
  Grid,
  Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';
class BonDetravil extends Component <any,any>{
constructor(props:any){
  super(props);
  this.state={chauf:[]}
}
     refreshList(){
        fetch('https://localhost:44339/api/chauffeur')
        .then(response=>response.json())
        .then(data=>{
          this.setState({chauf:data});
        })
      }
      componentDidMount() {
        this.refreshList();
      }
      componentDidUpdate(){
        this.refreshList();
      }

  render(){
    const {chauf} =this.state;
return(
  <Container>
        <Grid>
          <Grid 
           container
           sx={
            {
              m:2 
            }
           }
          >
            <Link to='/AddBonDeTravail'>
              <Button variant="contained" color="error" sx={
            {
              m:2 
            }
            }  >
             Ajouter Bon De Travail             
                </Button>
                </Link>
              <Divider />
  <table className="table">
  <thead><tr>
<th className="table-danger">Matricule</th> 
<th className="table-primary">Chauffeur</th>
<th className="table-secondary">Mécaniciens</th>
<th className="table-success">Pièces</th>
<th className="table-warning">Taches</th>
<th className="table-info">Actions</th>
</tr>
</thead>
  <tbody>
    {chauf.map(chau=>
     <tr key={chau.ChauffeurId}>
        <td>{chau.ChauffeurId}</td>
        <td>{chau.NomChauffeur}</td>
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