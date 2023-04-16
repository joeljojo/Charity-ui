import React from 'react';
import { Typography, Grid, Box, Paper } from '@mui/material';
import HomeBG from '../../Images/home-bg.png';
import Appbar from '../Commons/Appbar';
import Footer from '../Commons/Footer';

export default function Home() {
  return (
    <Grid>
      <Grid>
        <Appbar />
      </Grid>
      <Grid>
        <Box
          sx={{
            backgroundImage: `url('${HomeBG}')`,
            backgroundSize: 'cover',
            height: '600px',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              bottom: 0,
              left: 0,
              position: 'absolute',
              right: 0,
              top: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h4" component="h1" sx={{ color: '#f98908' }}>
              Help Raise a Homeless Child
            </Typography>
            <Typography variant="body1" mt={4} sx={{ color: 'white' }}>
              Together we can
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid>
        <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography
            variant="h4"
            mt={7}
            mb={7}
            component="h1"
            sx={{ color: '#282828', fontSize: 44, fontWeight: 700 }}
          >
            Our Objectives
          </Typography>
        </Grid>
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
            mb: 10,
          }}
        >
          <Paper
            elevation={3}
            component="div"
            sx={{ backgroundColor: '#ef413e' }}
          >
            <Typography
              mt={3}
              p={3}
              component="h1"
              sx={{
                textAlign: 'center',
                fontWeight: 500,
                fontSize: 24,
                color: '#ffffff',
              }}
            >
              Connection
            </Typography>
            <Typography
              mt={1}
              pr={3}
              pl={3}
              pb={3}
              component="p"
              sx={{ textAlign: 'center', color: '#ffffff' }}
            >
              Ensure the institutions have easy acccess to donors
            </Typography>
          </Paper>
          <Paper
            elevation={3}
            component="div"
            sx={{ backgroundColor: '#61ce70' }}
          >
            <Typography
              mt={3}
              p={3}
              component="h1"
              sx={{
                textAlign: 'center',
                fontWeight: 500,
                fontSize: 24,
                color: '#ffffff',
              }}
            >
              Save Life
            </Typography>
            <Typography
              mt={1}
              pr={3}
              pl={3}
              pb={3}
              component="p"
              sx={{ textAlign: 'center', color: '#ffffff' }}
            >
              Ensure needy childern have access to basic needs and attend school
            </Typography>
          </Paper>
          <Paper
            elevation={3}
            component="div"
            sx={{ backgroundColor: '#f98908' }}
          >
            <Typography
              mt={3}
              p={3}
              component="h1"
              sx={{
                textAlign: 'center',
                fontWeight: 500,
                fontSize: 24,
                color: '#ffffff',
              }}
            >
              Finance
            </Typography>
            <Typography
              mt={1}
              pr={3}
              pl={3}
              pb={3}
              component="p"
              sx={{ textAlign: 'center', color: '#ffffff' }}
            >
              Ensure needy children get study and upkeep finance through online
              charity
            </Typography>
          </Paper>
          <Paper
            elevation={3}
            component="div"
            sx={{ backgroundColor: '#5878b5' }}
          >
            <Typography
              mt={3}
              p={3}
              component="h1"
              sx={{
                textAlign: 'center',
                fontWeight: 500,
                fontSize: 24,
                color: '#ffffff',
              }}
            >
              Transparency
            </Typography>
            <Typography
              mt={1}
              pr={3}
              pl={3}
              pb={3}
              component="p"
              sx={{ textAlign: 'center', color: '#ffffff' }}
            >
              Ensure transparent and accountable use of collected or donated
              resources
            </Typography>
          </Paper>
        </Box>
      </Grid>
      <Footer />
    </Grid>
  );
}
