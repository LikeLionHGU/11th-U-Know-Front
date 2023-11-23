import { Box } from "@mui/material";

export default function PassBox({ isPass }) {
  return (
    <>
      <Box
        sx={{
          border: 1,
          borderRadius: 1,
          width: "60px",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderColor: isPass ? "success.default" : "error.default",
          color: isPass ? "success.default" : "error.default",
        }}
      >
        {isPass ? "합격" : "불합격"}
      </Box>
    </>
  );
}
