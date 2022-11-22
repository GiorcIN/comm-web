import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export function ChatDetailPreview(props) {

  return (
    <>
      <Grid container spacing={1} sx={{ marginTop: '1rem', marginBottom: '1rem', width: '100%' }}>
        <Grid item xs={2} display='flex' alignItems='center' justifyContent='center'>
          <Avatar alt="Gio Ramirez"/>
        </Grid>
        <Grid item xs={8} zeroMinWidth justifyContent='space-between' sx={{ flexFlow: 'column' }}>
          <Typography variant='body1' noWrap sx={{ color:'background.contrastText', fontWeight: 600 }}>Lorem Ipsum</Typography>
          <Typography variant='body2' noWrap >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper mollis urna, porta maximus magna viverra eu. Ut sit amet sagittis massa, sed convallis nulla. </Typography>
        </Grid>
        <Grid item xs={2} alignItems='end' justifyContent='space-between' sx={{ flexFlow: 'column', textAlign: 'end' }}>
          <Typography variant='body2'>10:38 AM</Typography>
          <FiberManualRecordIcon color='success' fontSize='16' />
        </Grid>
      </Grid>
      <Divider variant='fullWidth'/>
    </>
  );
}
export default ChatDetailPreview;
