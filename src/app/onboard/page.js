"use client";
import CustomTable from "@/components/CustomTable";
import GraduateJudgeTable from "@/components/GraduateJudgeTable";
import { Box, Button, Paper, Typography } from "@mui/material";

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

export default function page() {
  const rows = [
    createData(false, "기독교신앙의기초2", true, 3, 2, 1),
    createData(false, "세계관영역1", true, 3, 2, 1),
    createData(true, "기독교신앙의기초1", true, 3, 2, 1),
    createData(true, "세계관영역2", false, 3, 2, 1),
  ];

  return (
    <Box
      sx={{
        pt: "300px",
        display: "flex",
        justifyContent: "center",

        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "800px",
          gap: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h2"> 졸업의 모든 것</Typography>
          <Typography variant="h2">UKNOW에서 쉽고 간편하게</Typography>
        </Box>

        <Button
          sx={{
            px: "15px",
            py: "5px",
          }}
          color="primary"
          variant="contained"
        >
          Hisnet으로 로그인하기
        </Button>

        <Paper elevation={3}>
          <GraduateJudgeTable tableData={rows} />
        </Paper>
      </Box>
    </Box>
  );
}
