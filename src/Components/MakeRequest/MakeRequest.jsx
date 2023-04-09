/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function MakeRequest() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const requestData = {
      requestTitle: data.get('requestTitle'),
      facilityName: data.get('facilityName'),
      requestDescription: data.get('requestDescription'),
      numberOfChildren: data.get('numberOfChildren'),
      location: data.get('location'),
      amountRequired: data.get('amountRequired'),
      childrensHomeId: data.get('userID'),
      donorId: data.get('donorID'),
    };
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{ height: '100vh' }}
        justifyContent="center"
      >
        <CssBaseline />

        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          justifyContent="center"
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Make Request
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="requestTitle"
                label="Request Title"
                name="requestTitle"
                autoComplete="request-title"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="facilityName"
                label="Facility Name"
                name="facilityName"
                autoComplete="facility-name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="requestDescription"
                label="Request Description"
                name="requestDescription"
                autoComplete="request-description"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="numberOfChildren"
                label="No. Of Children"
                name="numberOfChildren"
                autoComplete="number-of-children"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="location"
                label="Location"
                name="location"
                autoComplete="location"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="amountRequired"
                label="Amount Required"
                name="amountRequired"
                autoComplete="amount-required"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="userID"
                label="User ID"
                name="userID"
                autoComplete="userID"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="donorID"
                label="Donor ID"
                name="donorID"
                autoComplete="donorID"
                autoFocus
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#jj" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    Don&#39;t have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
