import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import Typography from '@mui/material/Typography';
import { styles } from './styles';
//TODO: import mock-up data
const columns = [
  { field: 'id', headerName: 'ID' },
  {
    field: 'subject',
    headerName: 'Subject',
  },
  {
    field: 'category',
    headerName: 'Category',
  },
  {
    field: 'date',
    headerName: 'Date & Time',
    type: 'number',
  },
  {
    field: 'recipients',
    headerName: 'Recipients',
    type: 'number',
  },
  {
    field: 'successRate',
    headerName: 'Success Rate',
    type: 'number',
  },
  {
    field: 'favorite',
    headerName: 'Favorite',
    type: 'number',
  },
  {
    field: 'actions',
    headerName: 'More',
  },
];

const rows = [
  {
    id: 1,
    subject: 'School Closed Tomorrow',
    category: 'General',
    date: 'Nov 14, 2022',
    recipients: '274',
    successRate: '84%',
    favorite: true,
  },
  {
    id: 2,
    subject: 'Field Hockey Tryouts',
    category: 'Sports',
    date: 'Nov 14, 2022',
    recipients: '79',
    successRate: '61%',
    favorite: false,
  },
  {
    id: 3,
    subject: 'Field Trip Requirements',
    category: 'Fundraising',
    date: 'Nov 14, 2022',
    recipients: '14',
    successRate: '100%',
    favorite: false,
  },
  {
    id: 4,
    subject: 'Weekend Field Day',
    category: 'Menus',
    date: 'Nov 14, 2022',
    recipients: '381',
    successRate: '96%',
    favorite: true,
  },
  {
    id: 5,
    subject: 'Annual Excursion Plannings with...',
    category: 'Sports',
    date: 'Nov 14, 2022',
    recipients: '1322',
    successRate: '55%',
    favorite: true,
  },
  {
    id: 6,
    subject: 'Parents, Teachers Association...',
    category: 'School Closure',
    date: 'Nov 14, 2022',
    recipients: '475',
    successRate: '74%',
    favorite: false,
  },
  {
    id: 7,
    subject: 'Mid-Term Break for the Session',
    category: 'General',
    date: 'Nov 14, 2022',
    recipients: '200',
    successRate: '74%',
    favorite: false,
  },
];

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
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow
              sx={{
                '&:first-of-type td, &:first-of-type th': { border: 0 },
              }}
            >
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
