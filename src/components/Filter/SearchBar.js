"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

export default function SearchBar({ searchBar, setSearchBar }) {
  return (
    <Paper
      component="form"
      sx={{
        minWidth: "100px",
        width: "100%",
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        border: 1,
        borderColor: "lightgray",
        whiteSpace: "nowrap",
        height: "40px",
      }}
    >
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="검색하기"
        inputProps={{ "aria-label": "search google maps" }}
        value={searchBar}
        onChange={(e) => setSearchBar(e.target.value)}
      />
    </Paper>
  );
}
