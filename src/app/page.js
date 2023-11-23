import Image from "next/image";
import styles from "./page.module.css";
import { Box } from "@mui/material";
import CustomTable from "@/components/CustomTable";
import Title from "@/components/Title";
import GraduateJudgeTable from "@/components/GraduateJudgeTable";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        px: "100px",
        gap: "30px",
      }}
    >
      <Title title="영역별 졸업심사 결과" />
      <GraduateJudgeTable />
      {/* <DataGrid /> */}
    </Box>
  );
}
