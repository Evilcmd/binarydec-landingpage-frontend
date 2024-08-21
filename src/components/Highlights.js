import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
    {
        icon: <SettingsSuggestRoundedIcon />,
        title: 'Hire Production Ready Engineers Who Transform Ideas into Impactful Solutions',
        description:
            'Candidates tested on real-world scenarios are more likely to be ready to jump into ongoing projects, reducing the ramp-up time needed to get them productive.',
    },
    {
        icon: <ConstructionRoundedIcon />,
        title: 'Linked List ',
        description:
            'By focusing on practical skills, you can gauge how efficiently a candidate can apply their knowledge to deliver results in a real-world environment.',
    },
    {
        icon: <ThumbUpAltRoundedIcon />,
        title: 'Practical Relevance',
        description:
            'Real-world tests assess a candidate\'s ability to solve problems they\'ll actually encounter on the job, ensuring their skills align with day-to-day tasks.',
    },
];

export default function Highlights() {
    return (
        <Box
            id="highlights"
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                color: 'white',
                bgcolor: '#06090a',
            }}
        >
            <Container
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 3, sm: 6 },
                }}
            >
                <Box
                    sx={{
                        width: { sm: '100%', md: '60%' },
                        textAlign: { sm: 'left', md: 'center' },
                    }}
                >
                    <Typography component="h2" variant="h4" sx={{ fontSize: "clamp(2.5rem, 10vw, 4rem)" }}>
                        Why Real-World Tests Matter in Hiring
                    </Typography>
                </Box>
                <Grid container spacing={2.5}>
                    {items.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Stack
                                direction="column"
                                color="inherit"
                                component={Card}
                                spacing={1}
                                useFlexGap
                                sx={{
                                    p: 3,
                                    height: '100%',
                                    border: '1px solid',
                                    borderColor: 'grey.800',
                                    background: 'transparent',
                                    backgroundColor: 'grey.900',
                                }}
                            >
                                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                                <div>
                                    <Typography fontWeight="medium" gutterBottom sx={{ fontSize: '2rem' }}>
                                        {item.title}
                                    </Typography>
                                    {/* <Typography variant="body2" sx={{ color: 'grey.400', fontSize: '1rem' }}>
                                        {item.description}
                                    </Typography> */}
                                </div>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}