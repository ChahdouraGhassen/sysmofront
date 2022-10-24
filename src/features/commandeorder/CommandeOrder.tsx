import {
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Divider,
} from '@mui/material';
import Box from '@mui/material/Box';
function CommandeOrder(props:any) {
  return (
    <div
    style={{
      height:'100vh',
    }}
    >
      <Container >
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
<th className="table-danger">Nom Piece</th> 
<th className="table-primary">Quantité</th>
<th className="table-secondary">Quantité Stocks</th>
    </tr>
</thead>
  <tbody>
    <tr>
    <td>{props.commandeorder.nompiece}</td>
    <td>{props.commandeorder.quantite}</td>
    <td>{props.commandeorder.quantitestock}</td>
    </tr>
  </tbody>
</table>
</Box>
</CardContent>
</Card>
</Grid>
</Grid>
</Container>
    </div>
  )
}

export default CommandeOrder