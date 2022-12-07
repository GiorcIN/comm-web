import { Grid, TextField, InputAdornment, IconButton } from '@mui/material';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';

import MessageContainer from '../MessageContainer';
import { MessageMockupData, sortMessagesByDate } from './utils';
import { styles } from './styles';

export function ChatContainer(props) {
  const chatData = MessageMockupData.chatData.sort(sortMessagesByDate);

  return (
    <Grid container sx={styles.rootContainer}>
      <Grid item xs={12} sx={styles.gridItem}>
        {chatData.map((message) => (
          <MessageContainer
            key={message.messageId}
            data={message}
            userId="101"
          />
        ))}
      </Grid>
      <Grid item xs={12} sx={styles.gridItem}>
        <Grid container sx={styles.textBoxContainer}>
          <Grid item sx={styles.textBoxItem}>
            <IconButton sx={styles.textBoxIcon}>
              <AttachFileOutlinedIcon />
            </IconButton>
          </Grid>
          <Grid item sx={styles.textBoxInput}>
            <TextField
              placeholder="Write a message..."
              sx={styles.textField}
              InputProps={{
                type: 'text',
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      sx={styles.textBoxIcon}
                      aria-label="search"
                      onClick={() => console.log('On Click...')}
                      onMouseDown={() => console.log('On Mouse Down...')}
                      edge="end"
                    >
                      <EmojiEmotionsOutlinedIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item sx={styles.textBoxItem}>
            <IconButton sx={styles.textBoxIcon}>
              <KeyboardVoiceOutlinedIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default ChatContainer;
