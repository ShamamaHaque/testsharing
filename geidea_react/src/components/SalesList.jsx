import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from 'react-bootstrap/button';

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

function createData(merchantname, product, active, mcc, merchantid, postype, terminalid, action) {
    return { merchantname, product, active, mcc, merchantid, postype, terminalid, action };
}

const rows = [
    createData('KHALIQ ALMUBAYRIK', ' PAX A920', 'Active', 5331, 145287591, 'Terminal', 5674903291, 'View Details'),
    /*createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),*/
];



<> <Button variant="warning">Warning</Button>{' '}</>

export default function CustomizedTables() {
    return (


        <TableContainer component={Paper} style={{ marginBottom: "80px" }} >
            <Table sx={{ minWidth: 800 }} aria-label="customized table">
                <TableHead className='table-row' >
                    <TableRow >
                        <StyledTableCell style={{ fontSize: 17 }}>Merchant Name</StyledTableCell>
                        <StyledTableCell align="right" style={{ fontSize: 17 }}>Product</StyledTableCell>
                        <StyledTableCell align="right" style={{ fontSize: 17 }}>Active</StyledTableCell>
                        <StyledTableCell align="right" style={{ fontSize: 17 }}>MCC</StyledTableCell>
                        <StyledTableCell align="right" style={{ fontSize: 17 }}>MerchantID (MID)</StyledTableCell>
                        <StyledTableCell align="right" style={{ fontSize: 17 }}>POS Type</StyledTableCell>
                        <StyledTableCell align="right" style={{ fontSize: 17 }}>TerminalID (TID)</StyledTableCell>
                        
                         <StyledTableCell align="center" style={{ fontSize: 17 }}>Action</StyledTableCell>
                    

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.merchantname}>
                            <StyledTableCell component="th" scope="row">
                                {row.merchantname}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.product}</StyledTableCell>
                            <StyledTableCell align="right">{row.active}</StyledTableCell>
                            <StyledTableCell align="right">{row.mcc}</StyledTableCell>
                            <StyledTableCell align="right">{row.merchantid}</StyledTableCell>
                            <StyledTableCell align="right">{row.postype}</StyledTableCell>
                            <StyledTableCell align="right">{row.terminalid}</StyledTableCell>
                            <StyledTableCell align="right">
                                <div class="form-outline mb-4 col-lg-4">
                                    <Button type="button" class="btn btn-outline-warning"  >View Details</Button>

                                </div>






                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}
