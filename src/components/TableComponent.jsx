import React from 'react'
import { rows } from '../Data/BasicTableData'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const TableComponent = () => {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow style={{ fontWeight: 'bolder' }}>
                            <TableCell align="right">Tracking ID</TableCell>
                            <TableCell align="right">Product</TableCell>
                            <TableCell align="right">Customer</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell align="right">Payment Method</TableCell>
                            <TableCell align="right">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(({ id, product, img, customer, date, amount, method, status }) => (
                            <TableRow
                                key={id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {/* <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell> */}
                                <TableCell align="right">#{id}</TableCell>
                                <TableCell align="right">
                                    <span><img src={img} alt={product} /></span>
                                    {product}</TableCell>
                                <TableCell align="right">{customer}</TableCell>
                                <TableCell align="right">{date}</TableCell>
                                <TableCell align="right">{amount}</TableCell>
                                <TableCell align="right">{method}</TableCell>
                                <TableCell align="right">{status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


        </div>
    )
}

// id: 1143155,
// product: "Acer Nitro 5",
// img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
// customer: "John Smith",
// date: "1 March",
// amount: 785,
// method: "Cash on Delivery",
// status: "Approved",

export default TableComponent;