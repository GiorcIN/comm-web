import { Grid, Avatar, Typography, Divider } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import { styles } from './styles';

export function ChatDetailPreview(props) {
  return (
    <>
      <Grid container spacing={1} sx={styles.rootContainer}>
        <Grid item xs={2} sx={styles.avatarContainer}>
          <Avatar alt="Gio Ramirez" />
        </Grid>
        <Grid item xs={8} zeroMinWidth sx={styles.messageContainer}>
          <Typography variant="body1" noWrap>
            Lorem Ipsum
          </Typography>
          <Typography variant="body2" noWrap>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper
            mollis urna, porta maximus magna viverra eu. Ut sit amet sagittis
            massa, sed convallis nulla.{' '}
          </Typography>
        </Grid>
        <Grid item xs={2} sx={styles.dateContainer}>
          <Typography variant="body2" noWrap>
            10:38 AM
          </Typography>
          <FiberManualRecordIcon color="secondary" fontSize="16" />
        </Grid>
      </Grid>
      <Divider variant="fullWidth" />
    </>
  );
}
export default ChatDetailPreview;
