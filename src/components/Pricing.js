import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const tiers = [
    {
        title: "Sign up",
        subheader: "Recommended",

        price: "",
        pricedesc: "",
        description: [
            "5 free tests",
            "Access to AI-driven tools",
            "Priority Feature Requests",
            "Exclusive offers",
        ],
        buttonText: "Sign up for Early Access",
        buttonVariant: "outlined",
        href: "/signup",
    },
];

export default function Pricing() {
    return (
        <Container
            id="pricing"
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
            <Box
                sx={{
                    width: { sm: "100%", md: "60%" },
                    textAlign: { sm: "left", md: "center" },
                }}
            >
                <Typography
                    component="h2"
                    variant="h4"
                    color="text.primary"
                    sx={{ fontSize: 'clamp(2.8rem, 10vw, 4rem)', }}
                >
                    Pre Launch Offer
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: 'clamp(1.5rem, 2rem, 3rem)',
                        color: (theme) =>
                            theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                    }}
                >
                    All users signing up in the pre launch will get 5 free tests
                </Typography>
            </Box>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                {tiers.map((tier) => (
                    <Grid
                        item
                        key={tier.title}
                        xs={12}
                        sm={tier.title === "Enterprise" ? 12 : 6}
                        md={4}
                    >
                        <Card
                            sx={{
                                p: 2,
                                display: "flex",
                                flexDirection: "column",
                                gap: 4,
                                border:
                                    tier.title === "Professional" ? "4px solid" : "3px solid",

                                borderColor: tier.title === "Professional" ? "white" : "grey",
                                background:
                                    tier.title === "Professional"
                                        ? "linear-gradient(#033363, #021F3B)"
                                        : undefined,
                            }}
                        >
                            <CardContent>
                                <Box
                                    sx={{
                                        mb: 1,
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        color: tier.title === "Professional" ? "grey.100" : "",
                                    }}
                                >
                                    <Typography
                                        component="h3"
                                        variant="h6"
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            width: "100%",
                                            fontSize: tier.title === "Sign up" ? "2.4rem" : "1.5rem",
                                        }}
                                    >
                                        {tier.title !== "Sign up" ? "Subscription" : tier.title}
                                    </Typography>
                                    {tier.title === "Sign up" && (
                                        <Chip
                                            icon={<AutoAwesomeIcon />}
                                            label={tier.subheader}
                                            size="small"
                                            sx={{
                                                background: (theme) =>
                                                    theme.palette.mode === "light" ? "" : "none",
                                                backgroundColor: "primary.contrastText",
                                                "& .MuiChip-label": {
                                                    color: "primary.dark",
                                                },
                                                "& .MuiChip-icon": {
                                                    color: "primary.dark",
                                                },
                                            }}
                                        />
                                    )}
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "baseline",
                                        color:
                                            tier.title === "Professional" ? "grey.50" : undefined,
                                    }}
                                >
                                    {tier.title !== "Sign up" ? (
                                        <Typography
                                            component="h3"
                                            variant="h6"
                                            style={{
                                                fontSize: "2rem",
                                                display: "flex",
                                                justifyContent: "center",
                                                width: "100%",
                                            }}
                                        >
                                            &nbsp; Coming Soon
                                        </Typography>
                                    ) : (
                                        <></>
                                    )}
                                </Box>

                                <Divider
                                    sx={{
                                        my: 1,
                                        opacity: 0.2,
                                        borderColor: "grey.500",
                                    }}
                                />
                                {tier.description.map((line) => (
                                    <Box
                                        key={line}
                                        sx={{
                                            py: 1,
                                            display: "flex",
                                            gap: 1.5,
                                            alignItems: "center",
                                        }}
                                    >
                                        <CheckCircleRoundedIcon
                                            sx={{
                                                width: 20,
                                                color:
                                                    tier.title === "Professional"
                                                        ? "primary.light"
                                                        : "primary.main",
                                            }}
                                        />
                                        <Typography
                                            component="text"
                                            variant="subtitle2"
                                            sx={{
                                                color:
                                                    tier.title === "Professional"
                                                        ? "grey.200"
                                                        : undefined,
                                            }}
                                        >
                                            {line}
                                        </Typography>
                                    </Box>
                                ))}
                            </CardContent>
                            <CardActions>
                                {tier.title === "Sign up" ? (
                                    <Button
                                        fullWidth
                                        variant={tier.buttonVariant}
                                        component="a"
                                        href={tier.href}
                                        target="_blank"
                                        sx={{
                                            border: "3px solid",
                                        }}
                                    >
                                        {tier.buttonText}
                                    </Button>
                                ) : (
                                    <></>
                                )}
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
  }
