import { Box } from "@mui/material";

export default function PassBox({ isPass }) {
  return (
    <>
      <Box
        sx={{
          border: 1,
          borderRadius: 0.5,
          width: "60px",
          height: "20px",
          fontSize: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderColor: isPass ? "success.default" : "error.default",
          color: isPass ? "success.default" : "error.default",
          backgroundColor: isPass ? "success.lighter" : "error.lighter",
        }}
      >
        {isPass ? "합격" : "불합격"}
      </Box>
    </>
  );
}
