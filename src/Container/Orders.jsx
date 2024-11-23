import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Chip from '@mui/material/Chip';


const TableComponent = () => {
  const rows = [
    { name: "John Doe", order_no: 486324562, amount: "200.00", status: "delivered" },
    { name: "Jane Smith", order_no: 794654562, amount: "140.00", status:"cancel"},
    { name: "Sam Wilson", order_no: 536624562, amount: "230.00", status: "pending" },
    { name: "Alice Brown", order_no: 446324562, amount: "80.00", status:"delivered"},
  ];

  return (
    <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Customer</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Order No.
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Amount
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.order_no}</TableCell>
              <TableCell align="center">{row.amount}</TableCell>
              <TableCell align="center"><Chip label={row.status == 'delivered' ? "Delivered" : row.status == 'cancel' ? "Cancelled" : "Pending"} color={row.status == "delivered" ? "success" : "error"} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
