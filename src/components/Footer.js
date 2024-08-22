import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" mt={1}>
            {'Copyright © '}
            <Link href="#">BinaryDec&nbsp;</Link>
            {new Date().getFullYear()}
        </Typography>
    );
}

export default function Footer() {
    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        const offset = 128;
        if (sectionElement) {
            const targetScroll = sectionElement.offsetTop - offset;
            sectionElement.scrollIntoView({ behavior: 'smooth' });
            window.scrollTo({
                top: targetScroll,
                behavior: 'smooth',
            });
        }
    };

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 4, sm: 8 },
                py: { xs: 8, sm: 10 },
                textAlign: { sm: 'center', md: 'left' },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    width: '100%',
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4,
                        minWidth: { xs: '100%', sm: '60%' },
                    }}
                >
                    <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
                        <Typography variant="body2" fontWeight={600} gutterBottom sx={{ fontSize: '2rem' }}>
                            Contact Us
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mb={2} sx={{ fontSize: '1rem' }}>
                            Have questions or need more information? Reach out to us, and we'll get back to you as soon as possible.
                        </Typography>
                        <Button variant="outlined" color="primary" sx={{ flexShrink: 0 }}
                            href="mailto:binarydec5@gmail.com"
                        >
                            Get in Touch
                        </Button>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                        fontSize: 'clamp(1rem, 1.25rem, 1rem)',
                    }}
                >
                    
                    <Link color="text.secondary"
                        sx={{
                            '&:hover': {
                                color: 'primary.light', // Change color on hover
                            },
                        }}
                     style={{ cursor: 'pointer', }} onClick={() => scrollToSection('features')}>
                        Features
                    </Link>
                    <Link color="text.secondary"
                    sx={{
                            '&:hover': {
                                color: 'primary.light', // Change color on hover
                            },
                        }}
                     style={{ cursor: 'pointer' }} onClick={() => scrollToSection('highlights')}>
                        Highlights
                    </Link>
                    <Link color="text.secondary"
                        sx={{
                            '&:hover': {
                                color: 'primary.light', // Change color on hover
                            },
                        }}
                     style={{ cursor: 'pointer' }} onClick={() => scrollToSection('pricing')}>
                        Sign Up
                    </Link>
                    <Link color="text.secondary"
                        sx={{
                            '&:hover': {
                                color: 'primary.light', // Change color on hover
                            },
                        }}
                     style={{ cursor: 'pointer' }} onClick={() => scrollToSection('faq')}>
                        FAQs
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    pt: { xs: 4, sm: 8 },
                    width: '100%',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <div>
                    <Copyright />
                </div>
                <Stack
                    direction="row"
                    justifyContent="left"
                    spacing={1}
                    useFlexGap
                    sx={{
                        color: 'text.secondary',
                    }}
                >
                    <IconButton
                        color="inherit"
                        href="https://x.com/DecBinary48665"
                        aria-label="X"
                        sx={{ alignSelf: 'center' }}
                    >
                        <TwitterIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        href="https://www.linkedin.com/in/vivillon-labs-704977319/"
                        aria-label="LinkedIn"
                        sx={{ alignSelf: 'center' }}
                    >
                        <LinkedInIcon />
                    </IconButton>
                </Stack>
            </Box>
        </Container>
    );
}