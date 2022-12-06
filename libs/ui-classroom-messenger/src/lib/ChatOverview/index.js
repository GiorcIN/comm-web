import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import ChatDetailPreview from '../ChatDetailPreview';
import { styles } from './styles';

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
