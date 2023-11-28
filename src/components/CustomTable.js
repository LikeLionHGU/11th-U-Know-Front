import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(checked, name, calories, fat, carbs, protein) {
  return { checked ,name, calories, fat, carbs, protein };
}

const rows = [
  createData("합격","Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("합격","Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("합격","Eclair", 262, 16.0, 24, 6.0),
  createData("불합격","Cupcake", 305, 3.7, 67, 4.3),
  createData("불합격","Gingerbread", 356, 16.0, 49, 3.9),
];



export default function CustomTable() {
  return (
    <TableContainer component={Paper} sx={{paddingBottom: 8}}>
      <Table  aria-label="준선 table">
        <TableHead>
          <TableRow >
            <TableCell sx={{ width: 740, backgroundColor: "#5592FC"}}>7학기 수강계획 </TableCell>
            <TableCell sx={{ backgroundColor: "#5592FC"}} align="right"></TableCell>
            <TableCell sx={{backgroundColor: "#5592FC"}} align="right"></TableCell>
            <TableCell sx={{ backgroundColor: "#5592FC"}} align="right"></TableCell>
            <TableCell sx={{ backgroundColor: "#5592FC"}} align="right"></TableCell>
            <TableCell sx={{backgroundColor: "#5592FC"}} align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell sx={{
                border:1,
                borderColor:'blue'
              }} component="th" scope="row">
                {row.checked}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
