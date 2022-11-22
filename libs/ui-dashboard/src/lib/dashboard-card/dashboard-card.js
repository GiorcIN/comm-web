import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export function DashboardCard({type}) {
  return (
    <Box>
      <Card sx={{ backgroundColor: `${type.color}.main`, borderRadius: '1rem', border: 'none', padding:'2rem' }}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            {type.icon}
            <Typography variant='h6' color='background.main'>{type.label}</Typography>
            <Typography variant='body1'color='background.main'>{type.description}</Typography>
            <Button color='background' variant='contained' size='small' sx={{ minWidth: 'max-content', color: `${type.color}.main`, textTransform: 'none', marginTop: '1rem', boxShadow: 'none' }}>
              {type.btnText}
            </Button> 
          </Grid>
          <Grid item xs={6} display='flex' sx={{ alignItems: 'center', justifyContent: 'center'}}>
            <Box sx={{ width: '90%', height: '90%' , backgroundColor: `${type.color}.dark`, borderRadius: '1rem'}}>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
export default DashboardCard;
