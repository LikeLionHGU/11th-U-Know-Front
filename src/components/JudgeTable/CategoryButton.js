"use client";

import { Box } from "@mui/material";
import React from "react";

export default function CategoryButton() {
  const [selectedIdx, setSelectedIdx] = React.useState(0);

  return (
    <>
      {["전체", "전공", "기타"].map((title, idx) => (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            backgroundColor:
              selectedIdx === idx ? "primary.main" : "layout.grey3",
            color: selectedIdx === idx ? "white" : "layout.grey5",
            borderRadius: "10px 10px 0px 0px",
            fontSize: "13px",
            px: "80px",
            py: "10px",
          }}
          onClick={() => setSelectedIdx(idx)}
        >
          {title}
        </Box>
      ))}
    </>
  );
}
