import React, { useState } from 'react';
import { Container, Box } from '@mui/material';
import Header from './components/Header';
import GoalCards from './components/GoalCards';
import StatsCards from './components/StatsCards';
import ActivityChart from './components/ActivityChart';
import ActivityLogTable from './components/ActivityLogTable';
import Footer from './components/Footer';

function App() {
  const [view, setView] = useState('weekly'); // daily/weekly/monthly

  return (
    <Container maxWidth="lg">
      <Header view={view} setView={setView} />
      <GoalCards />
      <StatsCards />
      <ActivityChart view={view} />
      <ActivityLogTable />
      <Footer />
    </Container>
  );
}

export default App;
