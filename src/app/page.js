import Image from "next/image";
import styles from "./page.module.css";
import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import CustomTable from "@/components/CustomTable";
import Title from "@/components/Title";
import GraduateJudgeTable from "@/components/GraduateJudgeTable";
import SugangToggle from "@/components/ToggleButtonGroup";
import ToggleButtonGroup from "@/components/ToggleButtonGroup";
import SearchBar from "@/components/Filter/SearchBar";
import React from "react";
import { StarIcon } from "@/theme/overrides/CustomIcons";
import SidebarList from "@/components/Sidebar/SidebarList";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
  return (
    <Box
      sx={{
        backgroundColor: "background.grey1",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        px: "100px",
        py: "30px",
        gap: "30px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <Title title="영역별 졸업심사 결과" />
        <GraduateJudgeTable />
      </Box>
      <Sidebar />
    </Box>
  );
}
