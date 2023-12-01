"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function page() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(id, password);
  };

  const handleChange = (e) => {
    if (e.target.id === "id") {
      setId(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: { md: "block", xs: "none" },
          width: "60%",
          backgroundColor: "background.grey1",
        }}
      ></Box>
      <form
        onSubmit={handleLogin}
        style={{
          backgroundColor: "layout.white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",

            padding: "50px",

            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Typography variant="h5">UKOW와 함께 시작해볼까요!</Typography>
            <Typography variant="body1">
              로그인을 위해 Hisnet 아이디와 비밀번호를 입력해주세요.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "100%",
            }}
          >
            <TextField
              value={id}
              id="id"
              onChange={handleChange}
              variant="outlined"
              label="아이디"
            />
            <TextField
              value={password}
              id="password"
              onChange={handleChange}
              variant="outlined"
              label="비밀번호"
            />
          </Box>
          <Button
            sx={{
              width: "100%",
              backgroundColor: "primary.main",
              color: "white",
            }}
            onClick={handleLogin}
          >
            Hisnet으로 로그인
          </Button>
        </Box>
      </form>
    </Box>
  );
}
