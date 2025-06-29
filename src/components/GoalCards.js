import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const goals = {
  steps: 10000,
  calories: 2200,
  workouts: 5
};

const GoalCards = () => (
  <Grid container spacing={2} my={2}>
    {Object.entries(goals).map(([key, value]) => (
      <Grid item xs={12} sm={4} key={key}>
        <Card>
          <CardContent>
            <Typography variant="h6">{key.toUpperCase()}</Typography>
            <Typography variant="h5">{value}</Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default GoalCards;
