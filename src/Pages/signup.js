import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Snackbar from '@mui/material/Snackbar';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="#">
                BinaryDec
            </Link>{' '}
            {2024}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

export default function SignUp() {
    const PRE_SIGNUP_URL = 'https://binarydec-bwdeakgravfxgee6.southeastasia-01.azurewebsites.net/presignup';

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        company: '',
    });
    const [open, setOpen] = React.useState(false);
    const [errors, setErrors] = React.useState({
        nameError: '',
        emailError: '',
        companyError: '',
    });

    const navigate = useNavigate();
    const [snackMessage, setSnackMessage] = React.useState('');

    const handleOnChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const validateInput = () => {
        let isValid = true;
        let errors = {};
        let nameField = formData['name'];
        let emailField = formData['email'];
        let companyField = formData['company'];

        if (!nameField.length) {
            errors.nameError = 'Name is required';
            isValid = false;
        } else if (nameField.length < 3) {
            errors.nameError = 'Length should be at least 3';
            isValid = false;
        }

        if (!emailField.length) {
            errors.emailError = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(emailField)) {
            errors.emailError = 'Email is invalid';
            isValid = false;
        }

        if (!companyField.length) {
            errors.companyError = 'Company name is required';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateInput()) {
            return;
        }

        try {
            setLoading(true);
            const response = await fetch(PRE_SIGNUP_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "name": formData['name'],
                    "email": formData['email'],
                    "company": formData['company'],
                })
            });

            if (!response.ok) {
                setSnackMessage(`Email - ${formData['email']} already exists!`);
                setOpen(true);
                return;
            }

            const data = response.json();
            data.then((value) => {
                setSnackMessage("Signed-up successfully!");
                setOpen(true);

                setTimeout(() => {
                    navigate('/');
                }, 1500);
            }).catch((error) => {
                setSnackMessage(error);
                setOpen(true);
            });

        } catch (error) {
            setSnackMessage(error);
            setOpen(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            {loading && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        zIndex: 9999,
                        backdropFilter: 'blur(5px)',
                    }}
                >
                    <CircularProgress />
                </Box>
            )}
            <Container component="main" maxWidth="xs" sx={loading ? { filter: 'blur(5px)' } : {}}>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <img src='/static/binary-dec-updated.png' width='100rem' height='100rem' alt='logo' />
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" validate="true" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoFocus
                                    autoComplete="full-name"
                                    name="name"
                                    required
                                    type='text'
                                    fullWidth
                                    id="name"
                                    variant="outlined"
                                    label="Full Name"
                                    error={!!errors.nameError}
                                    helperText={errors.nameError}
                                    value={formData.name}
                                    onChange={handleOnChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    type="email"
                                    label="Email Address"
                                    name="email"
                                    variant="outlined"
                                    autoComplete="email"
                                    error={!!errors.emailError}
                                    helperText={errors.emailError}
                                    value={formData.email}
                                    onChange={handleOnChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    type='text'
                                    name="company"
                                    label="Company Name"
                                    id="company"
                                    autoComplete="company-name"
                                    variant="outlined"
                                    error={!!errors.companyError}
                                    helperText={errors.companyError}
                                    value={formData.company}
                                    onChange={handleOnChange}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Snackbar
                            open={open}
                            autoHideDuration={1500}
                            onClose={handleClose}
                            message={snackMessage}
                        />
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}
