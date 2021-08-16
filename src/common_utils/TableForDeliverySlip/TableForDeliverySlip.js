import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import  './TableForDeliverySlip.css'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
table: {minWidth: 650,}
})

 const TableForDeliverySlip=(props)=> {
const classes=useStyles()
    
    return (
        <>
        <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell align="right">Barcode</TableCell>
            <TableCell align="right">Gross</TableCell>
            <TableCell align="right">Qty</TableCell>
            <TableCell align="right">Promo disc</TableCell>
            <TableCell align="right">Manual disc</TableCell>
            <TableCell align="right">Net Amount</TableCell>

          </TableRow>
        </TableHead>
        <TableBody style={{borderBottom:'none !importent'}}>
          {props.data.map((row,key) => (
            <TableRow key={row.id}>
              <TableCell  scope="row">
                {key+1}
              </TableCell>
              <TableCell align="right">{row.barCode}</TableCell>
              <TableCell align="right">{row.gross}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.promoDisc}</TableCell>
              <TableCell align="right">{row.manualDisc}</TableCell>
              <TableCell align="right">{row.netAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>  
        </>
    )
}
export default TableForDeliverySlip;
