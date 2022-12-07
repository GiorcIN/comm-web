import { Grid, Avatar, Box, Typography } from '@mui/material';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';

import { styles } from './styles';
import { dateFormat } from './utils';

export function MessageContainer({ data, userId }) {
  const messageStyles =
    userId !== data.senderId
      ? styles.messageStyling
      : styles.externalMessageStyling;

  return (
    <Grid container gap={1} sx={messageStyles.rootContainer}>
      <Grid item>
        <Avatar variant="rounded" sx={messageStyles.avatarImg} />
      </Grid>
      <Grid item sx={messageStyles.growGridItem}>
        <Box sx={messageStyles.messageContentContainer}>
          {userId !== data.senderId && (
            <Typography variant="body1" sx={messageStyles.messageSender}>
              {data.senderName} {data.senderLastname}
            </Typography>
          )}
          <Typography variant="body2" sx={messageStyles.messageContent}>
            {data.textContent}
          </Typography>
          <Box sx={messageStyles.messageFooter}>
            <Typography variant="caption" sx={messageStyles.messageTimestamp}>
              {dateFormat(data.timestamp)}
            </Typography>
            {userId === data.senderId && (
              <>
                {data.sentStatus &&
                  data.deliveredStatus &&
                  !data.readStatus && (
                    <DoneOutlinedIcon sx={messageStyles.messageStatus} />
                  )}
                {data.sentStatus && data.deliveredStatus && data.readStatus && (
                  <DoneAllOutlinedIcon sx={messageStyles.messageStatus} />
                )}
              </>
            )}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
export default MessageContainer;
