import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const items = [
    {
        title: 'Build Any Application',
        description:
            'Build real world applications on the web. Frontend, Backend, Database, Machine Learning, we got it all',
    },
    {
        title: 'Automated tests',
        description:
            'We have automated tests to check if the candidate built the application to specification.',
    },
    {
        title: 'Anti Cheat Systems',
        description:
            'We use machine learning to observe candidates\' live video to ensure fairness.',
    },
    {
        title: 'Documentation and AI Support',
        description:
            'We provide documentation and AI support to simulate a real-world development environment.',
    },
];

export default function Features() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(-1);

    const selectedFeature = items[selectedItemIndex];

    return (
        <Container id="features" sx={{ py: { xs: 4, sm: 8 } }}>
            <Typography
                color="text.primary"
                variant="h1"
                sx={{
                    display: 'flex', justifyContent: 'center', marginBottom: '3rem',
                    fontSize: 'clamp(2.5rem, 10vw, 4rem)',
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
                                backgroundColor:
                                    selectedItemIndex === index ? 'action.selected' : 'action.selected',
                                borderColor: (theme) => {
                                    if (theme.palette.mode === 'light') {
                                        return selectedItemIndex === index
                                            ? 'primary.light'
                                            : 'primary.light';
                                    }
                                    return selectedItemIndex === index ? 'primary.dark' : 'primary.dark';
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