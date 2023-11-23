import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PassBox from "./PassBox";
import { Box } from "@mui/material";
import AreaSelect from "./Filter/AreaSelect";
import PassSelect from "./Filter/PassSelect";
import SearchBar from "./Filter/SearchBar";
// import { styled } from "@mui/material";

// const HeaderCell = styled(TableCell)(({ theme }) => ({
//   color: theme.palette.primary.light,
// }));

function createData(
  isPass,
  area,
  isEssential,
  totalPoint,
  earnedPoint,
  restPoint
) {
  return { isPass, area, isEssential, totalPoint, earnedPoint, restPoint };
}

const rows = [
  createData(false, "공동체리더십훈련1", true, 3, 2, 1),
  createData(false, "세계관영역1", true, 3, 2, 1),
  createData(true, "기독교신앙의기초1", true, 3, 2, 1),
  createData(true, "세계관영역2", false, 3, 2, 1),
  createData(true, "공동체리더십훈련1-6", true, 3, 2, 1),
];

export default function GraduateJudgeTable() {
  return (
    <TableContainer component={Paper}>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          pb: "30px",
        }}
      >
        <AreaSelect />
        <PassSelect />
        <SearchBar />
      </Box>
      <Table sx={{ minWidth: 650, maxWidth: "1000" }} aria-label="simple table">
        <TableHead
          sx={{
            borderBottom: 1,
            borderColor: "primary.light",
          }}
        >
          <TableRow>
            <TableCell
              sx={{
                color: "primary.light",
              }}
            >
              합격/불합격
            </TableCell>
            <TableCell
              sx={{
                color: "primary.light",
              }}
              align="right"
            >
              해당영역
            </TableCell>
            <TableCell
              sx={{
                color: "primary.light",
              }}
              align="right"
            >
              선택/필수
            </TableCell>
            <TableCell
              sx={{
                color: "primary.light",
              }}
              align="right"
            >
              총학점
            </TableCell>
            <TableCell
              sx={{
                color: "primary.light",
              }}
              align="right"
            >
              들은학점
            </TableCell>
            <TableCell
              sx={{
                color: "primary.light",
              }}
              align="right"
            >
              남은학점
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.isPass}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <PassBox isPass={row.isPass} />
              </TableCell>
              <TableCell align="right">{row.area}</TableCell>
              <TableCell align="right">
                {row.isEssential ? "필수" : "선택"}
              </TableCell>
              <TableCell align="right">{row.totalPoint}</TableCell>
              <TableCell align="right">{row.earnedPoint}</TableCell>
              <TableCell align="right">{row.restPoint}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
