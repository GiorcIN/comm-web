import ExpandMoreOutlined from '@mui/icons-material/ExpandMoreOutlined';
import {
  Box,
  Divider,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@mui/material';

import ChatDetailPreview from '../ChatDetailPreview';
import { styles } from './styles';

export function ChatSidebar(props) {
  return (
    <Box sx={styles.rootContainer}>
      <Accordion disableGutters sx={styles.accordionContainer}>
        <AccordionSummary
          expandIcon={<ExpandMoreOutlined sx={styles.expandIcon} />}
        >
          <Typography variant="subtitle2" sx={styles.groupTitle}>
            Favorites
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ChatDetailPreview />
          <ChatDetailPreview />
          <ChatDetailPreview />
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters sx={styles.accordionContainer}>
        <AccordionSummary
          expandIcon={<ExpandMoreOutlined sx={styles.expandIcon} />}
        >
          <Typography variant="subtitle2" sx={styles.groupTitle}>
            Groups
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ChatDetailPreview />
          <ChatDetailPreview />
          <ChatDetailPreview />
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters sx={styles.accordionContainer}>
        <AccordionSummary
          expandIcon={<ExpandMoreOutlined sx={styles.expandIcon} />}
        >
          <Typography variant="subtitle2" sx={styles.groupTitle}>
            Direct Messages
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ChatDetailPreview />
          <ChatDetailPreview />
          <ChatDetailPreview />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
export default ChatSidebar;
