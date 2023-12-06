import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PassBox from "./PassBox";
import { Box, Button } from "@mui/material";
import AreaSelect from "./Filter/AreaSelect";
import PassSelect from "./Filter/PassSelect";
import SearchBar from "./Filter/SearchBar";
import CategoryButton from "./JudgeTable/CategoryButton";
import { getLectureUntaken, getLectureWithPass } from "@/utils/lecture";
import { useSetRecoilState } from "recoil";
import { lectureTaken, lectureUnTaken, sidebarTitle } from "@/utils/atom";
// import { styled } from "@mui/material";

// const HeaderCell = styled(TableCell)(({ theme }) => ({
//   color: theme.palette.primary.light,
// }));

function createData(isPassed, lectureType, totalCredit, credit, restCredit) {
  return { isPassed, lectureType, totalCredit, credit, restCredit };
}

// const rows = [
//   createData(false, "전공필수", true, 3, 2, 1),
//   createData(false, "전공선택필수", true, 3, 2, 1),
//   createData(true, "설계", true, 3, 2, 1),
//   createData(true, "전공합계", false, 3, 2, 1),
//   // createData(true, "공동체리더십훈련1-6", true, 3, 2, 1),
// ];

export default function GraduateJudgeTable() {
  const setSidebarTitle = useSetRecoilState(sidebarTitle);
  const [rows, setRows] = React.useState([]);
  const [pass, setPass] = React.useState("전체"); // [pass, setPass
  const [area, setArea] = React.useState("전체");
  const [areaList, setAreaList] = React.useState([]);
  const [searchBar, setSearchBar] = React.useState("");
  const [allTakenLectures, setAllTakenLectures] = React.useState([]); // [allTakenLectures, setAllTakenLectures
  const setLectureUnTaken = useSetRecoilState(lectureUnTaken);
  const setLectureTaken = useSetRecoilState(lectureTaken);
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await getLectureWithPass();
      console.log("!!", response.data);
      setRows(
        response.data.map((row) =>
          createData(
            row.isPassed,
            row.lectureType,
            row.totalCredit,
            row.credit,
            row.totalCredit - row.credit
          )
        )
      );

      let allTakenLectures = {};
      response.data.forEach((row) => {
        allTakenLectures[row.lectureType] = row.userLectureResponseList;
      });

      setAllTakenLectures(allTakenLectures);

      setAreaList(["전체", ...response.data.map((item) => item.lectureType)]);
    };
    fetchData();
  }, []);

  const filterRows = (rows) => {
    let copyRows = rows;
    console.log(pass, areaList, searchBar);
    if (pass !== null && pass !== "전체")
      copyRows = copyRows.filter((row) => row.isPassed === pass);
    if (area && area !== "전체")
      copyRows = copyRows.filter((row) => row.lectureType === area);
    if (searchBar && searchBar !== "" && searchBar !== "전체")
      copyRows = copyRows.filter((row) => row.lectureType.includes(searchBar));
    return copyRows;
  };

  const handleRow = async (value) => {
    setSidebarTitle(value);
    const response = await getLectureUntaken(value);
    setLectureUnTaken(response.data);
    setLectureTaken(allTakenLectures[value]);
    // console.log(allTakenLectures["major"]);
    // console.log(response.data, allTakenLectures[value]);
  };

  return (
    <TableContainer component={Paper}>
      <Box
        sx={{
          display: "flex",
          gap: "5px",
          justifyContent: "spaceBetween",
          backgroundColor: "background.grey1",
        }}
      >
        <CategoryButton />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          py: "30px",
          px: "30px",
          backgroundColor: "layout.white",
        }}
      >
        <AreaSelect
          area={area}
          setArea={setArea}
          areaList={areaList}
          setAreaList={setAreaList}
        />
        <PassSelect pass={pass} setPass={setPass} />
        <SearchBar searchBar={searchBar} setSearchBar={setSearchBar} />
      </Box>
      <Table sx={{ minWidth: 650, maxWidth: "1000" }} aria-label="simple table">
        <TableHead
          sx={{
            borderBottom: 2,
            borderColor: "primary.main",
          }}
        >
          <TableRow>
            <TableCell
              sx={{
                color: "primary.light",
                pl: "50px",
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
            {/* <TableCell
              sx={{
                color: "primary.light",
              }}
              align="right"
            >
              선택/필수
            </TableCell> */}
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
                pr: "50px",
              }}
              align="right"
            >
              남은학점
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{}}>
          {filterRows(rows).map((row, idx) => (
            <TableRow
              key={idx}
              sx={{
                borderBottom: idx !== rows.length - 1 ? 1 : 0,
                borderColor: "layout.grey4",

                // "&:last-child td, &:last-child th": { border: 0 },
              }}
              onClick={() => handleRow(rows[idx].lectureType)}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  pl: "50px",
                }}
              >
                <PassBox isPass={row.isPassed} />
              </TableCell>
              <TableCell align="right">{row.lectureType}</TableCell>
              {/* <TableCell align="right">
                {row.isEssential ? "필수" : "선택"}
              </TableCell> */}
              <TableCell align="right">{row.totalCredit}</TableCell>
              <TableCell align="right">{row.credit}</TableCell>
              <TableCell
                align="right"
                sx={{
                  pr: "50px",
                }}
              >
                {row.restCredit}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
