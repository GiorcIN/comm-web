import { Box, Paper, Typography, Button } from '@mui/material';

import { styles } from './styles';
import ChatDetailPreview from '../ChatDetailPreview';

export function ChatOverview(props) {
  return (
    <Paper sx={styles.rootPaper}>
      <Box sx={styles.rootBox}>
        <Box sx={styles.titleContainer}>
          <Typography variant="subtitle2">Recent chat activity</Typography>
          <Button variant="contained" size="small" sx={styles.chatButton}>
            See All
          </Button>
        </Box>
        <Box>
          <ChatDetailPreview />
          <ChatDetailPreview />
          <ChatDetailPreview />
          <ChatDetailPreview />
          <ChatDetailPreview />
          <ChatDetailPreview />
          <ChatDetailPreview />
          <ChatDetailPreview />
        </Box>
      </Box>
    </Paper>
  );
}
export default ChatOverview;
//TODO: set border to var
