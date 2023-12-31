"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function AreaSelect({ area, setArea, areaList, setAreaList }) {
  // [area, setArea
  const handleChange = (event) => {
    setArea(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">해당영역</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={area}
          label="Area"
          onChange={handleChange}
        >
          {areaList?.map((item, idx) => (
            <MenuItem value={item} key={idx}>
              {item}
            </MenuItem>
          ))}

          {/* <MenuItem value="세계관영역1">세계관영역1</MenuItem> */}
          {/* <MenuItem value="기독교신앙의기초1">기독교신앙의기초1</MenuItem> */}
          {/* <MenuItem value="세계관영역2">세계관영역2</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );
}
