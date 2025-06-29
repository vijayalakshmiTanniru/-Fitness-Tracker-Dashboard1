import React from 'react';
import { Typography, ToggleButtonGroup, ToggleButton, Box } from '@mui/material';

const Header = ({ view, setView }) => (
  <Box textAlign="center" my={4}>
    <Typography variant="h4" gutterBottom>Fitness Dashboard</Typography>
    <ToggleButtonGroup value={view} exclusive onChange={(e, v) => v && setView(v)}>
      <ToggleButton value="daily">Daily</ToggleButton>
      <ToggleButton value="weekly">Weekly</ToggleButton>
      <ToggleButton value="monthly">Monthly</ToggleButton>
    </ToggleButtonGroup>
  </Box>
);

export default Header;
