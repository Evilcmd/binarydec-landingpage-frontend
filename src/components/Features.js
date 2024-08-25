import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const items = [
    {
        title: 'Build Any Application on The Web',
        description:
            'Build real world applications on the web. Frontend, Backend, Database, Machine Learning, we got it all',
    },
    {
        title: 'No Setup Required',
        description:
            'No installation, no compatability issues. Everything works out of the box',
    },
    {
        title: 'Automatic evaluation',
        description:
            'We\'ve automated the evaluation by measuring how well the candidate\'s application meets the specs',
    },
    {
        title: 'Anti Cheat Systems',
        description:
            'We use machine learning models to observe candidates\' live video to ensure fairness',
    },
    {
        title: 'Documentation and AI Support',
        description:
            'We provide documentation and AI support to simulate a real-world development environment',
    },
    {
        title: 'Candidate Friendly Experience',
        description:
            'We provide a VS Code interface, so users can start coding in a familiar UI right away',
    },
];

export default function Features() {

    return (
        <Container id="features" sx={{ py: { xs: 4, sm: 8 } }}>
            <Typography
                color="text.primary"
                variant="h1"
                sx={{
                    display: 'flex', justifyContent: 'center', marginBottom: '3rem',
                    fontSize: 'clamp(2.5rem, 3.5rem, 4rem)',
                }}
            >
                Product Features
            </Typography>
            <Grid container spacing={4}>
                {items.map(({ title, description }, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <Card
                            variant="outlined"
                            component={Button}
                            sx={{
                                p: 3,
                                height: '100%',
                                width: '100%',
                                background: 'none',
                                backgroundColor: 'action.selected',
                                borderColor: (theme) => {
                                    if (theme.palette.mode === 'light') {
                                        return 'primary.light';
                                    }
                                    return 'primary.dark';
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    textAlign: 'left',
                                    flexDirection: { xs: 'column', md: 'row' },
                                    alignItems: { md: 'center' },
                                    gap: 2.5,
                                }}
                            >
                                <Box sx={{ textTransform: 'none' }}>
                                    <Typography
                                        color="text.primary"
                                        variant="body2"
                                        fontWeight="bold"
                                        sx={{ fontSize: 'clamp(1.5rem, 2rem, 2rem)' }}
                                    >
                                        {title}
                                    </Typography>
                                    <Typography
                                        color="text.secondary"
                                        variant="body2"
                                        sx={{ my: 0.5, fontSize: '1.25rem' }}
                                    >
                                        {description}
                                    </Typography>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}