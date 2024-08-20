import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const tiers = [
    {
        title: 'Sign up',
        price: '',
        pricedesc: '',
        description: [
            '5 credits included',
            'Early Bird Pricing',
            'Priority Support',
            'Exclusive offers',
        ],
        buttonText: 'Sign up for Early Access',
        buttonVariant: 'outlined',
        href: '/signup'
    },
    {
        title: 'Bundle',
        subheader: 'Recommended',
        oldprice: '100',
        price: '50',
        pricedesc: 'for 12 credits',
        description: [
            '12 credits',
            'Early Bird Pricing',
            'Help center access',
            'Priority Support',
            'Exclusive offers',
        ],
        buttonText: 'Buy Now',
        buttonVariant: 'outlined',
        href: '/checkout'
    },
    {
        title: 'Buy Credits',
        oldprice: '10',
        price: '5',
        pricedesc: 'for 1 credit',
        description: [
            '1 credit',
            'Early Bird Pricing',
            'Help center access',
            'Priority Support',
        ],
        buttonText: 'Buy Now',
        buttonVariant: 'outlined',
        href: '/checkout'
    },
];

export default function Pricing() {
    return (
        <Container
            id="pricing"
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
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
                <Typography component="h2" variant="h4" color="text.primary" style={{ fontSize: '3.5rem' }}>
                    Pre Launch Offer
                </Typography>
                <Typography variant="body1" color="text.secondary" style={{ fontSize: '1.5rem' }}>
                    You can buy credits (1 credit = 1 test) at a massive discount as part of our pre launch offer<br />
                    All users signing up in the pre launch will get 5 credits free and exclusive access to special offers, early-bird pricing, and priority support.
                </Typography>
            </Box>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                {tiers.map((tier) => (
                    <Grid
                        item
                        key={tier.title}
                        xs={12}
                        sm={tier.title === 'Enterprise' ? 12 : 6}
                        md={4}
                    >
                        <Card
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 4,
                                border: tier.title === 'Professional' ? '1px solid' : undefined,
                                borderColor:
                                    tier.title === 'Professional' ? 'primary.main' : undefined,
                                background:
                                    tier.title === 'Professional'
                                        ? 'linear-gradient(#033363, #021F3B)'
                                        : undefined,
                            }}
                        >
                            <CardContent>
                                <Box
                                    sx={{
                                        mb: 1,
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        color: tier.title === 'Professional' ? 'grey.100' : '',
                                    }}
                                >
                                    <Typography component="h3" variant="h6">
                                        {tier.title}
                                    </Typography>
                                    {tier.title === 'Bundle' && (
                                        <Chip
                                            icon={<AutoAwesomeIcon />}
                                            label={tier.subheader}
                                            size="small"
                                            sx={{
                                                background: (theme) =>
                                                    theme.palette.mode === 'light' ? '' : 'none',
                                                backgroundColor: 'primary.contrastText',
                                                '& .MuiChip-label': {
                                                    color: 'primary.dark',
                                                },
                                                '& .MuiChip-icon': {
                                                    color: 'primary.dark',
                                                },
                                            }}
                                        />
                                    )}
                                </Box>
                                {tier.price != '' ? (

                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'baseline',
                                            color: tier.title === 'Professional' ? 'grey.50' : undefined,
                                        }}
                                    >
                                        <Typography component="h3" variant="h6" style={{ textDecoration: 'line-through' }}>
                                            ${tier.oldprice}
                                        </Typography>
                                        <Typography component="h3" variant="h2">
                                            &nbsp;${tier.price}
                                        </Typography>
                                        <Typography component="h3" variant="h6">
                                            &nbsp; {tier.pricedesc}
                                        </Typography>
                                    </Box>
                                ) : <></>}
                                <Divider
                                    sx={{
                                        my: 2,
                                        opacity: 0.2,
                                        borderColor: 'grey.500',
                                    }}
                                />
                                {tier.description.map((line) => (
                                    <Box
                                        key={line}
                                        sx={{
                                            py: 1,
                                            display: 'flex',
                                            gap: 1.5,
                                            alignItems: 'center',
                                        }}
                                    >
                                        <CheckCircleRoundedIcon
                                            sx={{
                                                width: 20,
                                                color:
                                                    tier.title === 'Professional'
                                                        ? 'primary.light'
                                                        : 'primary.main',
                                            }}
                                        />
                                        <Typography
                                            component="text"
                                            variant="subtitle2"
                                            sx={{
                                                color:
                                                    tier.title === 'Professional' ? 'grey.200' : undefined,
                                            }}
                                        >
                                            {line}
                                        </Typography>
                                    </Box>
                                ))}
                            </CardContent>
                            <CardActions>
                                <Button
                                    fullWidth
                                    variant={tier.buttonVariant}
                                    component="a"
                                    href={tier.href}
                                    target="_blank"
                                >
                                    {tier.buttonText}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}