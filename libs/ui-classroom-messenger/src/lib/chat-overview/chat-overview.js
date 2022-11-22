import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import ChatDetailPreview from "../chat-detail-preview/chat-detail-preview";

export function ChatOverview(props) {
  return (
    <Paper sx={{ boxShadow: 'none', border: '1px solid #EAE9F0', borderRadius: '1rem', width: '100%', height: '100%', overflowX: 'hidden', overflowY: 'scroll', msOverflowStyle: 'none' }}>
      <Box sx={{ margin: '2rem' }}>
        <Box display='flex' sx={{ justifyContent: 'space-between', alignItems: 'baseline'}}>
          <Typography variant='h6' sx={{ color: 'background.contrastText' }}>6 Unread Messages</Typography>
          <Link  variant='body1' sx={{ textDecoration: 'none' }}>See Chatssssss</Link>
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