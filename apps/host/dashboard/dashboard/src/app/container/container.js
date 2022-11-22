import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import { Container as MainContainer, Grid } from '@mui/material';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { DashboardCard } from 'libs/ui-dashboard/src'

const ClassroomMessenger = React.lazy(
  () => import('classroom-messenger/Module')
);

const Reporting = React.lazy(
  () => import('reporting/Module')
);

export function Container(props) {

  const theme = useTheme();
  const positionValue = useMediaQuery(theme.breakpoints.down('md'))

  const broadcast = {
    color: 'primary',
    label: 'Broadcast',
    description: 'Send special announcements to students, parents, and guardians.',
    btnText: 'Send A Broadcast',
    icon: <SensorsOutlinedIcon color='background' sx={{fontSize: '4rem'}}/>
  }
  
  const chat = {
    color: 'secondary',
    label: 'Chat',
    description: 'Start a one-on-one message or a group chat.',
    btnText: 'Start a Chat',
    icon: <ChatOutlinedIcon color='background' sx={{fontSize: '4rem'}}/>,
  }
  return (
    <MainContainer maxWidth='xl'>
      <Typography variant='subtitle2' sx={{ marginTop: '4rem', marginBottom: '4rem', fontSize:'2rem', color:'background.contrastText'}}>Systemwide Alerts Message</Typography>
      <Grid container spacing={2} direction='row' sx={{ position: 'relative' }} >
        <Grid item xs={12} md={8} container rowGap={2} sx={{ flexFlow: 'column', padding: '1rem'}}>
          <DashboardCard type={broadcast} />
          <DashboardCard type={chat} />
        </Grid>
        <Grid item xs={12} md={4} container sx={positionValue ? { position: 'relative', maxHeight: '20rem' } : {position: 'absolute', top: '0', bottom: '1rem', right: '1rem'} }>
          <ClassroomMessenger />
        </Grid>
      </Grid>
      <Grid item xs={12} container rowGap={2} sx={{ flexFlow: 'column', marginTop: '2rem'}}>
          <Reporting />
      </Grid>
    </MainContainer>
  );
}
export default Container;
