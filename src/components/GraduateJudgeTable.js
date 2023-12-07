import * as React from "react";
import {
  Box,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PassBox from "./PassBox";
import AreaSelect from "./Filter/AreaSelect";
import PassSelect from "./Filter/PassSelect";
import SearchBar from "./Filter/SearchBar";
import CategoryButton from "./JudgeTable/CategoryButton";
import { getLectureUntaken, getLectureWithPass } from "@/utils/lecture";
import { useSetRecoilState } from "recoil";
import { lectureTaken, lectureUnTaken, sidebarTitle } from "@/utils/atom";

function createData(
  isPassed,
  lectureType,
  totalCredit,
  credit,
  restCredit,
  details
) {
  return { isPassed, lectureType, totalCredit, credit, restCredit, details };
}

function Row(props) {
  const subRowDescription = (area) => {
    switch (area) {
      case "P/F과목 총이수학점":
        return "총 이수 학점의 30% 이하 (130학점 대비 기준학점 : 39학점)";
      case "영어강의":
        return "교양(6), 전공(21), 둘중 아무거나(3)";
      case "총 취득 학점":
        return "130헉점 이상";
      case "평점 평균":
        return "2.0 / 4.5 이상";
      case "졸업 영어 시험":
        return "토익 700점/오픽 AL 이상";
      default:
        return "";
    }
  };

  const { row, handleRowClick, isOpen } = props;

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }}
        onClick={() => {
          // e.stopPropagation();
          handleRowClick(row.lectureType);
          props.setOpenRow(isOpen ? null : row.lectureType);
        }}
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
      <TableRow
        sx={{
          backgroundColor: "layout.grey2",
        }}
      >
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <Box
              sx={{
                margin: 1,
                height: "40px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                gutterBottom
                component="div"
                sx={{
                  pl: "25px",
                }}
              >
                {subRowDescription("P/F과목 총이수학점")}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// import * as React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import PassBox from "./PassBox";
// import { Box, Button } from "@mui/material";
// import AreaSelect from "./Filter/AreaSelect";
// import PassSelect from "./Filter/PassSelect";
// import SearchBar from "./Filter/SearchBar";
// import CategoryButton from "./JudgeTable/CategoryButton";
// import { getLectureUntaken, getLectureWithPass } from "@/utils/lecture";
// import { useSetRecoilState } from "recoil";
// import { lectureTaken, lectureUnTaken, sidebarTitle } from "@/utils/atom";
// // import { styled } from "@mui/material";

// // const HeaderCell = styled(TableCell)(({ theme }) => ({
// //   color: theme.palette.primary.light,
// // }));

// function createData(isPassed, lectureType, totalCredit, credit, restCredit) {
//   return { isPassed, lectureType, totalCredit, credit, restCredit };
// }

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
  const [openRow, setOpenRow] = React.useState(null);
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

  const handleRowClick = async (value) => {
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
        {/* <TableBody sx={{}}>
          {filterRows(rows).map((row, idx) => (
            <TableRow
              key={idx}
              sx={{
                borderBottom: idx !== rows.length - 1 ? 1 : 0,
                borderColor: "layout.grey4",

                
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
        </TableBody> */}

        <TableBody>
          {filterRows(rows).map((row, idx) => (
            <Row
              key={idx}
              row={row}
              isOpen={openRow === row.lectureType}
              setOpenRow={setOpenRow}
              handleRowClick={handleRowClick}
            />
          ))}

          <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
            {["", "", "", "", ""].map((content, idx) => (
              <TableCell
                key={idx}
                sx={{
                  backgroundColor: "layout.grey1",
                  width: "110px",
                  height: "30px",
                  // border: 1,
                }}
              >
                {content}
              </TableCell>
              // <TableCell
              //   sx={{
              //     backgroundColor: "layout.grey1",
              //     width: "100%",
              //     height: "20px",
              //     border: 1,
              //   }}
              // ></TableCell>
            ))}
          </TableRow>
          {/* <Paper
            sx={{
              display: "flex",
              borderColor: "primary.main",
              border: 1,
              color: "primary.main",
              fontWeight: 800,
            }}
          > */}

          <TableRow
            sx={{
              "& > *": { borderBottom: "unset" },
              borderColor: "primary.main",
              border: 2,
              color: "primary.main",
              borderRadius: "10px",
            }}
          >
            <TableCell
              component="th"
              scope="row"
              sx={{
                pl: "50px",
              }}
            >
              <PassBox isPass={true} />
            </TableCell>
            <TableCell align="right">최종 교양 판정</TableCell>
            <TableCell align="right">60학점</TableCell>
            <TableCell align="right">30학점</TableCell>
            <TableCell
              align="right"
              sx={{
                pr: "50px",
              }}
            >
              30학점
            </TableCell>
          </TableRow>
          {/* </Paper> */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
