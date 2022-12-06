import { Box, Card, Button, Typography, Grid } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { styles } from './styles';

export function DashboardCard({ type }) {
  return (
    <Box>
      <Card sx={styles[`rootCard${type.id}`]}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Typography
              variant="subtitle1"
              color={
                type.id === 'Broadcast' ? 'background.light' : 'primary.main'
              }
              sx={{ marginBottom: '1rem' }}
            >
              {type.label}
            </Typography>
            <Typography
              variant="body1"
              color={
                type.id === 'Broadcast' ? 'background.light' : 'primary.main'
              }
            >
              {type.description}
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <Button
                  color="secondary"
                  variant="contained"
                  size="small"
                  sx={styles.cardButton}
                >
                  {type.btnText}
                </Button>
              </Grid>
              {type.id === 'Broadcast' && (
                <Grid item xs={12} md={6}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={styles.templatesButton}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    Your templates
                  </Button>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
export default DashboardCard;
