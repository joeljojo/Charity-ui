import * as React from 'react';
import { Grid } from '@mui/material';
import Appbar from '../Commons/Appbar';
import Footer from '../Commons/Footer';

export default function About() {
  return (
    <Grid>
      <Grid>
        <Appbar />
      </Grid>
      <Grid>
        <Footer />
      </Grid>
    </Grid>
  );
}
