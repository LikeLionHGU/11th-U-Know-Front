"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function PassSelect() {
  const [essential, setEssential] = React.useState("");

  const handleChange = (event) => {
    setEssential(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">선택/필수</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={essential}
          label="선택/필수"
          onChange={handleChange}
        >
          <MenuItem value="필수">필수</MenuItem>
          <MenuItem value="선택">선택</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
