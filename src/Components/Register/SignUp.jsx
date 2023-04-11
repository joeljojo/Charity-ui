import * as React from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Link,
  Grid,
  Box,
  Container,
  Typography,
  RadioGroup,
  Radio,
} from '@mui/material';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../Redux/actions';

const theme = createTheme();

export default function SignUp() {
  const addUserState = useSelector((state) => state.addUserState);
  const { message, status } = addUserState;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = React.useState('childrenshome');
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  if (status === true) {
    setTimeout(() => {
      navigate('/signin');
    }, 3000);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
      childrensHome: data.get('childrenshome'),
      donor: data.get('donor'),
    };
    dispatch(addUser(user));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" color="#f98908">
            Sign up
          </Typography>
          <Typography mt={2} component="p" sx={{ color: 'red' }}>
            {message}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="first-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="last-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <RadioGroup value={value} onChange={handleChange} row>
                  <FormControlLabel
                    name="childrenshome"
                    value="childrenshome"
                    control={<Radio />}
                    label="Childrens Home"
                  />
                  <FormControlLabel
                    name="donor"
                    value="donor"
                    control={<Radio />}
                    label="Donor"
                  />
                </RadioGroup>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                '&:hover': {
                  backgroundColor: '#f98908',
                },
              }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                {' '}
                Already have an account?
                <Link
                  sx={{
                    px: 2,
                    '&:hover': {
                      textDecoration: 'none',
                      color: '#f98908',
                    },
                  }}
                  href="/signin"
                  variant="body2"
                >
                  Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
