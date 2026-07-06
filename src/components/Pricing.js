import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const demoFeatures = [
    "Tailored product walkthrough",
    "Discuss your specific use cases",
    "Custom pricing & ROI analysis",
    "Security and compliance overview",
    "Q&A with a product expert",
];

export default function CallToAction() {
    return (
        <Container
            id="cta"
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: { xs: 3, sm: 6 },
            }}
        >
            {/* Header Section */}
            <Box
                sx={{
                    width: { sm: "100%", md: "60%" },
                    textAlign: "center",
                }}
            >
                <Typography
                    component="h2"
                    variant="h4"
                    color="text.primary"
                    sx={{ fontSize: 'clamp(2.5rem, 3.2rem, 3.5rem)', mb: 2, fontWeight: 'bold' }}
                >
                    Ready to scale your operations?
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: 'clamp(1.2rem, 1.5rem, 1.8rem)',
                        color: "text.secondary",
                    }}
                >
                    See how our platform can be customized for your organization's unique needs.
                </Typography>
            </Box>

            {/* CTA Card Section */}
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={8} md={6}>
                    <Card
                        sx={{
                            p: 3,
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                            border: "2px solid",
                            borderColor: "primary.main",
                            boxShadow: (theme) =>
                                theme.palette.mode === 'light'
                                    ? '0 8px 24px rgba(0,0,0,0.1)'
                                    : '0 8px 24px rgba(0,0,0,0.5)',
                        }}
                    >
                        <CardContent sx={{ p: 0 }}>
                            <Box
                                sx={{
                                    mb: 2,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Typography
                                    component="h3"
                                    variant="h5"
                                    fontWeight="bold"
                                    color="primary.main"
                                    sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                                >
                                    <CalendarMonthIcon /> Book a Demo
                                </Typography>
                            </Box>

                            <Divider
                                sx={{
                                    my: 2,
                                    opacity: 0.5,
                                    borderColor: "grey.500",
                                }}
                            />

                            {/* Features List */}
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 3 }}>
                                {demoFeatures.map((line) => (
                                    <Box
                                        key={line}
                                        sx={{
                                            display: "flex",
                                            gap: 2,
                                            alignItems: "center",
                                        }}
                                    >
                                        <CheckCircleRoundedIcon
                                            sx={{
                                                width: 24,
                                                color: "primary.main",
                                            }}
                                        />
                                        <Typography
                                            component="span"
                                            variant="subtitle1"
                                            sx={{ color: "text.primary" }}
                                        >
                                            {line}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </CardContent>

                        <CardActions sx={{ p: 0, mt: 2 }}>
                            <Button
                                fullWidth
                                variant="contained"
                                size="large"
                                component="a"
                                href="https://calendly.com/ditona/30min" // Update this link to your scheduling tool (e.g., Calendly)
                                target="_blank"
                                sx={{
                                    py: 1.5,
                                    fontSize: '1.1rem',
                                    fontWeight: 'bold',
                                }}
                            >
                                Schedule Your Call
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}