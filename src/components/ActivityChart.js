import React from 'react';
import { Line } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

const dataSets = {
  daily: [3000, 5000, 4000, 7000, 6000, 8000, 7500],
  weekly: [4000, 5000, 6000, 7000, 6500, 7200, 7800],
  monthly: [4500, 4700, 4800, 6000, 5900, 6200, 7000]
};

const ActivityChart = ({ view }) => {
  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Steps',
      data: dataSets[view],
      fill: false,
      borderColor: 'blue'
    }]
  };

  return (
    <Box my={4}>
      <Typography variant="h6" gutterBottom>Steps ({view})</Typography>
      <Line data={chartData} />
    </Box>
  );
};

export default ActivityChart;
