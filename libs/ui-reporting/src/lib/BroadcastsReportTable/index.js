import StarIcon from '@mui/icons-material/Star';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';

import { styles } from './styles';
import { columns, rows } from './utils';

export function BroadcastsReportTable() {
  return (
    <Paper sx={styles.rootBox}>
      <Box sx={styles.titleContainer}>
        <Typography variant="subtitle2">Recent Broadcasts</Typography>
        <Button variant="contained" size="small" sx={styles.titleButton}>
          See All
        </Button>
      </Box>
      <TableContainer>
        <Table sx={styles.tableWrapper} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow sx={styles.tableRow}>
              {columns.map((column) => (
                <TableCell sx={styles.headerRowStyle} key={column.field}>
                  {column.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell sx={styles.bodyRowStyle}>
                  <Box>
                    {row.subject}
                    <Typography variant="body2">Sender Name</Typography>
                  </Box>
                </TableCell>
                <TableCell sx={styles.bodyRowStyle}>{row.category}</TableCell>
                <TableCell sx={styles.bodyRowStyle}>
                  <Box>
                    {row.date}
                    <Typography variant="body2">9:22 AM</Typography>
                  </Box>
                </TableCell>
                <TableCell sx={styles.bodyRowStyle} align="right">
                  {row.recipients}
                </TableCell>
                <TableCell sx={styles.bodyRowStyle} align="right">
                  {row.successRate}
                </TableCell>
                <TableCell sx={styles.bodyRowStyle} align="center">
                  {row.favorite ? (
                    <StarIcon color="primary" />
                  ) : (
                    <StarBorderIcon color="primary" />
                  )}
                </TableCell>
                <TableCell sx={styles.bodyRowStyle}>
                  <MoreHorizIcon sx={styles.moreIcon} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
export default BroadcastsReportTable;
