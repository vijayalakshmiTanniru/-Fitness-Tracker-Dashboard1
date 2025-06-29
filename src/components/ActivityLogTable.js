import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const logs = [
  { date: '2025-06-28', activity: 'Running', duration: '30 mins', calories: 300 },
  { date: '2025-06-27', activity: 'Cycling', duration: '45 mins', calories: 400 }
];

const ActivityLogTable = () => (
  <>
    <Typography variant="h6" gutterBottom>Activity Log</Typography>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Activity</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Calories</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {logs.map((log, index) => (
            <TableRow key={index}>
              <TableCell>{log.date}</TableCell>
              <TableCell>{log.activity}</TableCell>
              <TableCell>{log.duration}</TableCell>
              <TableCell>{log.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
);

export default ActivityLogTable;
