"use client";

import { Box, Button } from "@mui/material";
import { useState } from "react";

export default function ToggleButtonGroup({ button1, button2 }) {
  const [selected, setSelected] = useState(button1);
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Button
        id="미수강"
        onClick={() => setSelected(button1)}
        sx={{
          width: "100%",
          px: "30px",
          py: "10px",
          borderRadius: "5px 0 0 5px",
          color: selected === button1 ? "primary.main" : "layout.grey7",
          backgroundColor: selected === button1 ? "primary.shadow" : "white",
          border: 1,
          borderColor: "primary.shadow",
        }}
      >
        {button1}
      </Button>
      <Button
        id={button2}
        onClick={() => setSelected(button2)}
        sx={{
          width: "100%",
          px: "30px",
          py: "10px",
          borderRadius: "0 5px 5px 0",
          color: selected === button2 ? "primary.main" : "layout.grey7",
          backgroundColor: selected === button2 ? "primary.shadow" : "white",
          border: 1,
          borderColor: "primary.shadow",
        }}
      >
        {button2}
      </Button>
    </Box>
  );
}
