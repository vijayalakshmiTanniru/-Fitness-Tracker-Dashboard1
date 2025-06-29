import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const stats = {
  steps: 7500,
  calories: 1800,
  workouts: 3
};

const StatsCards = () => (
  <Grid container spacing={2} my={2}>
    {Object.entries(stats).map(([key, value]) => (
      <Grid item xs={12} sm={4} key={key}>
        <Card>
          <CardContent>
            <Typography variant="h6">Today's {key}</Typography>
            <Typography variant="h5">{value}</Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default StatsCards;
