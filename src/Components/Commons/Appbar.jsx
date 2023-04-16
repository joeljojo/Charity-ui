import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Appbar() {
  return (
    <Grid>
      <AppBar position="static">
        <Toolbar component="div" sx={{ backgroundColor: '#f98908' }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Tasha Charity
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
          <Button color="inherit" component={Link} to="/signin">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}
