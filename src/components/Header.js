"use client";

import Icon from "@/assets/Icon";
import { isLoginState, userState } from "@/utils/atom";
import axiosInstance from "@/utils/axios";
import { Box, Button, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Header() {
  const isLogin = useRecoilValue(isLoginState);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  const setIsLogin = useSetRecoilState(isLoginState);
  const [user, setUser] = useRecoilState(userState);

  console.log(user);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
    setUser(null);
    window.location.href = "/auth";
    alert("로그아웃 되었습니다.");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 50px",
        height: "70px",
        color: "layout.white",
      }}
    >
      <Link href="/">Logo</Link>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "400px",
        }}
      >
        <div
          style={{
            display: "flex",

            alignItems: "center",
            gap: "20px",
          }}
        >
          <Link href="/">졸업심사요건</Link>
          <Link href="/course/simulate">수강계획시뮬레이션</Link>
        </div>

        <div
          style={{
            display: "flex",

            alignItems: "center",
            gap: "20px",
          }}
        >
          {isLogin && (
            <IconButton
              sx={{
                zIndex: "200",
              }}
              onClick={handleClick}
            >
              <AccountCircleIcon size="50" />
            </IconButton>
          )}
          {/* <IconButton onClick={handleLogout}>
            <Icon name="LogoutIcon" size="50" />
          </IconButton> */}
          {isOpen && (
            <Box
              sx={{
                zIndex: "100",
                width: "200px",
                height: "150px",
                display: "flex",
                flexDirection: "column",

                justifyContent: "justifyContent",
                alignItems: "center",

                p: "20px",
                position: "absolute",
                right: "0",
                border: 1,
                borderColor: "lightGray",
                borderRadius: "20px",
                top: "80px",
                right: "10px",
                gap: "5px",
                backgroundColor: "layout.white",
              }}
            >
              <Typography variant="h6">{user?.name}</Typography>
              <Typography variant="body1" sx={{ mb: 2, color: "gray" }}>
                {user.id}
              </Typography>

              <Button
                variant="contained"
                onClick={handleLogout}
                color="inherit"
                sx={{
                  width: "100%",
                  borderRadius: "20px",
                  height: "40px",
                }}
              >
                로그아웃
              </Button>
            </Box>
          )}
        </div>
      </div>
    </div>
  );
}
