"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function PassSelect({ pass, setPass }) {
  const handleChange = (event) => {
    setPass(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">합격/불합격</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={pass}
          label="합격/불합격"
          onChange={handleChange}
        >
          <MenuItem value={"전체"}>전체</MenuItem>
          <MenuItem value={true}>합격</MenuItem>
          <MenuItem value={false}>불합격</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
