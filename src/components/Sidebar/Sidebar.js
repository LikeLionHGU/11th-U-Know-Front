import { Box, Typography } from "@mui/material";
import ToggleButtonGroup from "../ToggleButtonGroup";
import SearchBar from "../Filter/SearchBar";
import SidebarList from "./SidebarList";

export default function Sidebar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        minWidth: "400px",
        borderRadius: "10px",
        p: "20px",
        mt: "60px",
        backgroundColor: "layout.white",
        position: "sticky",
        height: "600px",
      }}
    >
      <Typography variant="h5">영역별 수강 현황</Typography>
      <Typography variant="body2" color="layout.grey5">
        영역별 수강 현황
      </Typography>
      <ToggleButtonGroup button1="미수강" button2="수강완료" />

      <SearchBar />
      <SidebarList />
    </Box>
  );
}
