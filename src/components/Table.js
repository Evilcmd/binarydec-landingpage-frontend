import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

function createData(name, binaryDec, otherPlatform) {
    return { name, binaryDec, otherPlatform };
}

const rows = [
    createData('Test real-world project skills', true, false),
    createData('Automated Testing', true, true),
    createData('Anti Cheat Systems', true, true),
    createData('Closest to Real Work Perfomance', true, false),
    createData('Documentation and AI Support', true, false),
    createData('Code Efficiency Metrics', true, false),
    createData('Documentation and AI Support', true, false),
    createData('Test Required skills', true, false),
];

export default function BasicTable() {
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
            <Typography component="h2" variant="h4" sx={{ fontSize: "clamp(2.5rem, 3.5rem, 4rem)" }}>
                What Makes Us Stand Out
            </Typography>
            <TableContainer
                component={Paper}
                sx={{
                    borderRadius: '16px',
                    boxShadow: ((theme) =>
                        theme.palette.mode === 'light' ? `0px 4px 20px ${theme.palette.primary.main}` : `0px 4px 20px ${theme.palette.primary.main}`)
                }}
            >
                <Table
                    sx={{
                        minWidth: 320,
                        width: "100%",
                        '& .MuiTableCell-root': {
                            padding: { xs: "8px", sm: "16px" },
                            fontSize: { xs: '0.9rem', sm: '1.2rem' },
                        }
                    }}
                >
                    <TableHead>
                        <TableRow
                            sx={{
                                backgroundColor: '#212121',
                            }}
                        >
                            <TableCell sx={{ fontSize: '1.2rem', color: '#cacaca', }}>Features</TableCell>
                            <TableCell sx={{ fontSize: '1.2rem', color: '#cacaca', textAlign: 'center' }} align="center">BinaryDec</TableCell>
                            <TableCell sx={{ fontSize: '1.2rem', color: '#cacaca', textAlign: 'center' }} align="center">Other Platforms</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{
                                    '&:last-child td, &:last-child th': { border: 0 },
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'dark' ? '#191919' : undefined,
                                }}
                            >
                                <TableCell sx={{ fontSize: '1.2rem' }} component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell sx={{ fontSize: '1.2rem', textAlign: 'center' }} align="center">
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        {row.binaryDec ? <CheckCircleIcon sx={{ color: '#22c55e' }} /> : <CancelIcon sx={{ color: '#f43f5e' }} />}
                                    </div>
                                </TableCell>
                                <TableCell sx={{ fontSize: '1.2rem', textAlign: 'center' }} align="center">
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        {row.otherPlatform ? <CheckCircleIcon sx={{ color: '#22c55e' }} /> : <CancelIcon sx={{ color: '#f43f5e' }} />}
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
