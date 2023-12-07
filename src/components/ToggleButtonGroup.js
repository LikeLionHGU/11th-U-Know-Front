"use client";

import { Box, Button } from "@mui/material";
import { useState } from "react";

export default function ToggleButtonGroup({
  isTakenSelected,
  setIsTakenSelected,
  button1,
  button2,
}) {
  // const [selected, setSelected] = useState(button1);
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Button
        id="미수강"
        onClick={() => setIsTakenSelected(false)}
        sx={{
          width: "100%",
          px: "30px",
          py: "10px",
          borderRadius: "5px 0 0 5px",
          color: !isTakenSelected ? "primary.main" : "layout.grey7",
          backgroundColor: !isTakenSelected ? "primary.shadow" : "white",
          border: 1,
          borderColor: "primary.shadow",
        }}
      >
        {button1}
      </Button>
      <Button
        id={button2}
        onClick={() => setIsTakenSelected(true)}
        sx={{
          width: "100%",
          px: "30px",
          py: "10px",
          borderRadius: "0 5px 5px 0",
          color: isTakenSelected ? "primary.main" : "layout.grey7",
          backgroundColor: isTakenSelected ? "primary.shadow" : "white",
          border: 1,
          borderColor: "primary.shadow",
        }}
      >
        {button2}
      </Button>
    </Box>
  );
}
