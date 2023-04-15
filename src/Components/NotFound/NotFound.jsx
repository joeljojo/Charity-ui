import * as React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NotFoundImage from '../../Images/notfound.JPG';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Grid
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        justifyContent: 'center',
      }}
    >
      <Grid>
        <Typography
          sx={{
            fontSize: 32,
            fontWeight: 700,
            color: '#212b36',
            textAlign: 'center',
          }}
          component="h2"
          mt={5}
        >
          Sorry, page not found!
        </Typography>
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 400,
            color: '#b2bac1',
            textAlign: 'center',
            width: 500,
          }}
          component="p"
          mt={5}
        >
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
          mistyped the URL? Be sure to check your spelling.
        </Typography>
      </Grid>
      <Grid mt={5} mb={5} component="img" src={NotFoundImage} />
      <Grid>
        <Button
          onClick={() => {
            navigate('/');
          }}
          sx={{
            backgroundColor: '#00ab55',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#00ab55',
              color: '#ffffff',
            },
          }}
        >
          Go To Home
        </Button>
      </Grid>
    </Grid>
  );
}
