

import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';



export default function Loan() {


  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' , margin: 10 }}>
          <Typography component="div" variant="h3">
            Need a home loan? Get pre-approved
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          Find a lender who can offer competitive mortgage rates and help you with pre-approval.
         
          </Typography>
          <Button variant="contained">Get Pre-Approved Now</Button>
        </CardContent>
        
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 900, height:500 }}
        image="https://i.ibb.co/dMz7Jz6/pexels-photo-4064027.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
}