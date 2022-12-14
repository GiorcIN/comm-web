import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container as MainContainer, Grid, Typography } from '@mui/material';

import { styles } from './styles';
import { DashboardCard } from 'libs/ui-dashboard/src';
import { ChatOverview } from '@comm-web/ui-classroom-messenger';

const Reporting = React.lazy(() => import('reporting/Module'));

export function Container(props) {
  const theme = useTheme();
  const positionValue = useMediaQuery(theme.breakpoints.down('md'));

  const broadcast = {
    id: 'Broadcast',
    color: 'primary',
    label: 'Broadcast your message',
    description: 'Create your message once, and share it in many formats.',
    btnText: 'Send A Broadcast',
  };

  const chat = {
    id: 'Chat',
    color: 'secondary',
    label: 'Chat with someone',
    description: 'Start a one-on-one message or group chat.',
    btnText: 'Start a Chat',
  };

  return (
    <MainContainer maxWidth="xl">
      <Typography variant="subtitle1" sx={styles.title}>
        It's nice to see you again{' '}
        <span role="img" aria-label="Waving hand">
          👋
        </span>
      </Typography>
      <Grid container spacing={2} direction="row" sx={styles.relativeContainer}>
        <Grid
          item
          xs={12}
          md={8}
          container
          rowGap={2}
          sx={styles.cardsContainer}
        >
          <DashboardCard type={broadcast} />
          <DashboardCard type={chat} />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          container
          sx={
            positionValue
              ? styles.messengerContainerRelative
              : styles.messengerContainerAbsolute
          }
        >
          <ChatOverview />
        </Grid>
      </Grid>
      <Grid item xs={12} container rowGap={2} sx={styles.reportingContainer}>
        <Reporting />
      </Grid>
    </MainContainer>
  );
}
export default Container;
