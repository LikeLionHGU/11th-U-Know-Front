import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import { Droppable } from "react-beautiful-dnd";
function createData(checked, name, calories, fat, carbs, protein) {
  return { checked, name, calories, fat, carbs, protein };
}

const majorConverter = (name) => {
  if (name === "major") return "전공";
  return "교양";
};

export default function CustomTable({ tableData }) {
  return (
    <Droppable droppableId="customTable">
      {(provided) => (
        <TableContainer key={tableData.tableId} component={Paper}>
          <Table aria-label="준선 table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    backgroundColor: "primary.main",
                    color: "layout.white",
                  }}
                >
                  {tableData.tableName}
                </TableCell>

                <TableCell sx={{ backgroundColor: "primary.main" }}></TableCell>
                <TableCell sx={{ backgroundColor: "primary.main" }}></TableCell>
                <TableCell
                  sx={{ backgroundColor: "primary.main" }}
                  align="right"
                ></TableCell>
                <TableCell
                  sx={{ backgroundColor: "primary.main" }}
                  align="right"
                ></TableCell>
                <TableCell
                  sx={{ backgroundColor: "primary.main" }}
                  align="right"
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableHead>
              <TableRow
                sx={{
                  borderBottom: "2px solid #5592FC",
                }}
              >
                <TableCell sx={{ color: "primary.main" }}>교양/전공</TableCell>

                <TableCell sx={{ color: "primary.main" }} align="right">
                  해당영역
                </TableCell>
                <TableCell sx={{ color: "primary.main" }} align="right">
                  과목명
                </TableCell>
                <TableCell sx={{ color: "primary.main" }} align="right">
                  총학점
                </TableCell>
                <TableCell
                  sx={{ color: "primary.main" }}
                  align="right"
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.userPlanLectureResponse.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell sx={{}} component="th" scope="row">
                    {majorConverter(row.lectureType)}
                  </TableCell>
                  <TableCell align="right">
                    {row.lectureResponse.type}
                  </TableCell>
                  <TableCell align="right">
                    {row.lectureResponse.name}
                  </TableCell>
                  <TableCell align="right">
                    {row.lectureResponse.credit}
                  </TableCell>
                  <TableCell align="right">
                    <DoNotDisturbAltIcon
                      sx={{
                        color: "layout.grey4",
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {provided.placeholder}
        </TableContainer>
      )}
    </Droppable>
  );
}
