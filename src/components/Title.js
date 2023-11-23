"use client";

import { Box, Typography } from "@mui/material";

export default function Title({ title }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        width: "100%",
      }}
    >
      <Typography
        variant="h6"
        component="div"
        position="start"
        sx={{ width: "100%" }}
      >
        {title}
      </Typography>
    </Box>
  );
}
