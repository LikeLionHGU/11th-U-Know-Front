"use client";

import { TableCell, styled } from "@mui/material";

// const StyledCell = styled(TableCell)(({ theme }) => ({
//   color: theme.palette.primary.light,
// }));

export default function HeaderCell({ title }) {
  return (
    <TableCell
      align="right"
      sx={{
        color: "primary.light",
      }}
    >
      {title}
    </TableCell>
  );
}
