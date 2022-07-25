import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from 'react-bootstrap';
import {Trash, PencilSquare } from 'react-bootstrap-icons';

import "../App.css";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 17,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(teamleader, zone, subzone, region, city, action) {
    return { teamleader, zone, subzone, region, city, action };
}

const rows = [
    createData('KHALIQ ALMUBAYRIK', ' Al Sulimaniyah', ' Al Sulimaniyah1', 'Northern Region', 'Al Riyadh', 'View Details'),
    /*createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),*/
];





export default function AddTechnician() {
    return (


        <TableContainer component={Paper} style={{ marginBottom: "80px" }} >
            <Table sx={{ minWidth: 800 }} aria-label="customized table">
                <TableHead className='table-row'>
                    <TableRow >
                        <StyledTableCell style={{ fontSize: 17 }}>Technician</StyledTableCell>
                        <StyledTableCell align="right" style={{ fontSize: 17 }}>Zone</StyledTableCell>
                        <StyledTableCell align="right" style={{ fontSize: 17 }}>Subzone</StyledTableCell>
                        <StyledTableCell align="right" style={{ fontSize: 17 }}>Region</StyledTableCell>
                        <StyledTableCell align="right" style={{ fontSize: 17 }}>City</StyledTableCell>
                        <StyledTableCell align="center" style={{ fontSize: 17 }}>Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.teamleader}>
                            <StyledTableCell component="th" scope="row">
                                {row.teamleader}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.zone}</StyledTableCell>
                            <StyledTableCell align="right">{row.subzone}</StyledTableCell>
                            <StyledTableCell align="right">{row.region}</StyledTableCell>
                            <StyledTableCell align="right">{row.city}</StyledTableCell>
                            <StyledTableCell align="right">
                                <div className="form-outline mb-4 col-lg-6">
                                    <Button style={{marginBottom:"8px"}}>
                                    <PencilSquare color="white" size={19} />
                                    </Button>
                                </div>
                                <div className="form-outline mb-4 col-lg-2">
                                    <Button>
                                    <Trash color="white" size={20} />
                                    </Button>

                                   
                                </div>


                                
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}
