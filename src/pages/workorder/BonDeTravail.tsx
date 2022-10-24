import {FC} from 'react';
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
import Box from '@mui/material/Box';
import { Link, NavLink } from 'react-router-dom';

const BonDethavil:FC=()=>{
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
            <Card>
              <Button variant="contained" color="error" sx={
            {
              m:2 
            }
            }>
             Ajouter Bon De Travail             
                </Button>
              <Divider />
              <CardContent>
                <Box>
   <table className="table">
  <thead>
    <tr>
<th className="table-danger">Matricule</th> 
<th className="table-primary">Chauffeur</th>
<th className="table-secondary">Mécaniciens</th>
<th className="table-success">Pièces</th>
<th className="table-warning">Taches</th>
<th className="table-info">Actions</th>
    </tr>
</thead>
  <tbody>
</tbody>
</table>
</Box>
</CardContent>
</Card>
</Grid>
</Grid>
</Container>
)
}
export default BonDethavil;