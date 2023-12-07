import { Box, Typography } from "@mui/material";
import ToggleButtonGroup from "../ToggleButtonGroup";
import SearchBar from "../Filter/SearchBar";
import SidebarList from "./SidebarList";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { sidebarTitle } from "@/utils/atom";
import { lectureConverter } from "@/utils/converter";

export default function Sidebar({ button1, button2 }) {
  const [searchWord, setSearchWord] = useState("");
  const title = useRecoilValue(sidebarTitle);
  const [isTakenSelected, setIsTakenSelected] = React.useState(false);
  return (
    <Box
      sx={{
        // position: "fixed",
        // top: 50,
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        minWidth: "400px",
        borderRadius: "10px",
        p: "20px",

        // mt: "60px",
        backgroundColor: "layout.white",
        position: "sticky",
        height: "600px",
      }}
    >
      <Typography variant="h5">
        {lectureConverter(title) + " 수강현황"}
      </Typography>
      <Typography variant="body2" color="layout.grey5">
        찜한 과목은 수강계획 시뮬레이션에 저장됩니다!
      </Typography>
      <ToggleButtonGroup
        isTakenSelected={isTakenSelected}
        setIsTakenSelected={setIsTakenSelected}
        button1={button1}
        button2={button2}
      />

      <SearchBar searchBar={searchWord} setSearchBar={setSearchWord} />
      <SidebarList
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        isTakenSelected={isTakenSelected}
        setIsTakenSelected={setIsTakenSelected}
      />
    </Box>
  );
}
