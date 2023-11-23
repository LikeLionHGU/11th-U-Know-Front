"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function AreaSelect() {
  const [area, setArea] = React.useState("");

  const handleChange = (event) => {
    setArea(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">해당영역</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={area}
          label="Area"
          onChange={handleChange}
        >
          <MenuItem value="공동체리더십훈련1">공동체리더십훈련1</MenuItem>
          <MenuItem value="세계관영역1">세계관영역1</MenuItem>
          <MenuItem value="기독교신앙의기초1">기독교신앙의기초1</MenuItem>
          <MenuItem value="세계관영역2">세계관영역2</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
