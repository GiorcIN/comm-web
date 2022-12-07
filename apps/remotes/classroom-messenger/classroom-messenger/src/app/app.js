import { Container, Grid } from '@mui/material';

import {
  ChatContainer,
  ChatHeader,
  ChatSidebar,
} from 'libs/ui-classroom-messenger/src';

export function App() {
  return (
    <Container maxWidth="xl" sx={{ height: '100%' }}>
      <ChatHeader />
      <Grid container sx={{ height: '100%' }}>
        <Grid item xs={3}>
          <ChatSidebar />
        </Grid>
        <Grid item xs={9}>
          <ChatContainer />
        </Grid>
      </Grid>
    </Container>
  );
}
export default App;
