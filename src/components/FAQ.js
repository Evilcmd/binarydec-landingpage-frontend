import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Container
            id="faq"
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
            <Typography
                component="h2"
                variant="h4"
                color="text.primary"
                sx={{
                    width: { sm: '100%', md: '60%' },
                    textAlign: { sm: 'left', md: 'center' },
                }}
            >
                Frequently asked questions
            </Typography>
            <Box sx={{ width: '100%' }}>
                <Accordion
                    expanded={expanded === 'panel1'}
                    onChange={handleChange('panel1')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                    >
                        <Typography component="h3" variant="subtitle2" style={{ fontSize: '1.25rem' }}>
                            Can I return the credits bought?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant="body2"
                            gutterBottom
                            sx={{ maxWidth: { sm: '100%', md: '70%', fontSize: '1rem', textAlign: 'justify' } }}
                        >
                            Yes, we offer a full refund for any unused credits purchased, no questions asked. Your satisfaction is our priority, and we want to ensure you feel confident in your purchase.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion
                    expanded={expanded === 'panel2'}
                    onChange={handleChange('panel2')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2d-content"
                        id="panel2d-header"
                    >
                        <Typography component="h3" variant="subtitle2" style={{ fontSize: '1.25rem' }}>
                            Can we add more users or upgrade our plan mid-cycle?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant="body2"
                            gutterBottom
                            sx={{ maxWidth: { sm: '100%', md: '70%', fontSize: '1rem', textAlign: 'justify' } }}
                        >
                            Absolutely. Our platform scales with your business. You can add user seats or upgrade your tier at any time, and we will prorate the cost for the remainder of your current billing cycle.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion
                    expanded={expanded === 'panel3'}
                    onChange={handleChange('panel3')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3d-content"
                        id="panel3d-header"
                    >
                        <Typography component="h3" variant="subtitle2" style={{ fontSize: '1.25rem' }}>
                            How do you secure our company's data?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant="body2"
                            gutterBottom
                            sx={{ maxWidth: { sm: '100%', md: '70%', fontSize: '1rem', textAlign: 'justify' } }}
                        >
                            Security is our top priority. We use enterprise-grade AES-256 encryption for data at rest and TLS 1.2+ for data in transit. We also offer features like Single Sign-On (SSO), Two-Factor Authentication (2FA), and Role-Based Access Control (RBAC).
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion
                    expanded={expanded === 'panel4'}
                    onChange={handleChange('panel4')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4d-content"
                        id="panel4d-header"
                    >
                        <Typography component="h3" variant="subtitle2" style={{ fontSize: '1.25rem' }}>
                            What kind of support do you offer?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant="body2"
                            gutterBottom
                            sx={{ maxWidth: { sm: '100%', md: '70%', fontSize: '1rem', textAlign: 'justify' } }}
                        >
                            All plans include 24/7 email and chat support, plus access to our comprehensive knowledge base. Professional and Enterprise tiers include priority support with guaranteed SLAs and a dedicated Customer Success Manager (CSM).
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion
                    expanded={expanded === 'panel5'}
                    onChange={handleChange('panel5')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5d-content"
                        id="panel5d-header"
                    >
                        <Typography component="h3" variant="subtitle2" style={{ fontSize: '1.25rem' }}>
                            Do you provide training for our team?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant="body2"
                            gutterBottom
                            sx={{ maxWidth: { sm: '100%', md: '70%', fontSize: '1rem', textAlign: 'justify' } }}
                        >
                            Yes. We offer extensive onboarding resources, including video tutorials and interactive documentation. Enterprise plans include customized, live training sessions for your admins and end-users.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion
                    expanded={expanded === 'panel6'}
                    onChange={handleChange('panel6')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel6d-content"
                        id="panel6d-header"
                    >
                        <Typography component="h3" variant="subtitle2" style={{ fontSize: '1.25rem' }}>
                            Do you have an API for custom integrations?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant="body2"
                            gutterBottom
                            sx={{ maxWidth: { sm: '100%', md: '70%', fontSize: '1rem', textAlign: 'justify' } }}
                        >
                            Yes, we provide a robust, well-documented REST API and webhooks, allowing your engineering team to build custom workflows and integrate seamlessly with your internal proprietary systems.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Container>
    );
}