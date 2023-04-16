import React from 'react';
import { Typography, Grid, Box } from '@mui/material';

export default function Footer() {
  return (
    <Grid sx={{ backgroundColor: '#202020' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 280,
          },
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <Grid
          component="div"
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <Typography pt={10} component="h3" sx={{ color: '#ffffff' }}>
            Social Media
          </Typography>
          <Typography component="h3" sx={{ color: '#ffffff' }}>
            Twitter
          </Typography>
          <Typography component="h3" sx={{ color: '#ffffff' }}>
            Facebook
          </Typography>
          <Typography component="h3" sx={{ color: '#ffffff' }}>
            Email
          </Typography>
          <Typography pb={10} component="h3" sx={{ color: '#ffffff' }}>
            Whatsapp
          </Typography>
        </Grid>
        <Grid
          component="div"
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <Typography component="h3" pt={10} sx={{ color: '#ffffff' }}>
            Quick Links
          </Typography>
          <Typography component="h3" sx={{ color: '#ffffff' }}>
            Home
          </Typography>
          <Typography component="h3" sx={{ color: '#ffffff' }}>
            About
          </Typography>
          <Typography component="h3" sx={{ color: '#ffffff' }}>
            Contact us
          </Typography>
          <Typography component="h3" pb={10} sx={{ color: '#ffffff' }}>
            Donate
          </Typography>
        </Grid>
        <Grid
          component="div"
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <Typography component="h3" pt={10} sx={{ color: '#ffffff' }}>
            Location
          </Typography>
          <Typography component="h3" sx={{ color: '#ffffff' }}>
            Kakamega
          </Typography>
          <Typography component="h3" sx={{ color: '#ffffff' }}>
            Vision Street
          </Typography>
          <Typography component="h3" sx={{ color: '#ffffff' }}>
            Vision Road
          </Typography>
          <Typography component="h3" pb={10} sx={{ color: '#ffffff' }}>
            P.O Box 30, Kakamega
          </Typography>
        </Grid>
        <Grid
          component="div"
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <Typography component="h3" pt={10} sx={{ color: '#ffffff' }}>
            Your Help
          </Typography>
          <Typography component="h3" sx={{ color: '#ffffff' }}>
            We value your Contributions
          </Typography>
          <Typography component="h3" sx={{ color: '#ffffff' }}>
            Keep us accountable
          </Typography>
          <Typography component="h3" pb={10} sx={{ color: '#ffffff' }}>
            Thanks for contibuting
          </Typography>
        </Grid>
      </Box>
    </Grid>
  );
}
