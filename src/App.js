import React from 'react';
import logo from './logo.svg';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function App() {
  return (

    <Paper>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
    <Typography variant="h5" component="h3">
      This is a sheet of paper.
    </Typography>
    <Typography component="p">
      Paper can be used to build surface or other elements for your application.
    </Typography>
  </Paper>
  );
}

export default App;
