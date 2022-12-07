import {
  Grid,
  Box,
  Avatar,
  Typography,
  Autocomplete,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ForumTwoToneIcon from '@mui/icons-material/ForumTwoTone';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { styles } from './styles';

export function ChatHeader(props) {
  return (
    <Grid container sx={styles.rootContainer}>
      <Grid item xs={3} sx={styles.leftContainer}>
        <Box>
          <Box sx={styles.headerContainer}>
            <ForumTwoToneIcon color="primary" sx={styles.chatIcon} />
            <Typography variant="subtitle2" fontSize="2rem">
              Chat
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.searchContainer}>
          <Autocomplete
            freeSolo
            id="chatSearchBar"
            options={[]}
            disableClearable
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Search..."
                sx={styles.textfield}
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        sx={styles.searchBoxIcon}
                        aria-label="search"
                        onClick={() => console.log('On Click...')}
                        onMouseDown={() => console.log('On Mouse Down...')}
                        edge="end"
                      >
                        <SearchOutlinedIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </Box>
      </Grid>
      <Grid item xs={9} container sx={styles.rigthContainer}>
        <Grid item xs={11} sx={styles.chatInfoContainer}>
          <Box sx={styles.infoBox}>
            <Grid container gap={1} sx={styles.contactDataContainer}>
              <Grid item sx={styles.avatarContainer}>
                <Avatar variant="rounded" sx={styles.avatarImg} />
              </Grid>
              <Grid item flexDirection="column">
                <Typography variant="subtitle2">Rolfi Sanchez</Typography>
                <Typography variant="body1">Guardian</Typography>
              </Grid>
            </Grid>
            <Box sx={styles.groupsBox}>
              <Typography variant="body1">Math 01</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={1} sx={styles.iconContainer}>
          <StarBorderIcon color="primary" />
        </Grid>
      </Grid>
    </Grid>
  );
}
export default ChatHeader;
