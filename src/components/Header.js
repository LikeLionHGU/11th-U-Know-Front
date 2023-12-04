"use client";

import Icon from "@/assets/Icon";
import { isLoginState, userState } from "@/utils/atom";
import axiosInstance from "@/utils/axios";
import { IconButton } from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

export default function Header() {
  const setIsLogin = useSetRecoilState(isLoginState);
  const setUser = useSetRecoilState(userState);

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
          <Link href="/graduate/result">졸업심사요건</Link>
          <Link href="/course/simulate">수강계획시뮬레이션</Link>
        </div>

        <div
          style={{
            display: "flex",

            alignItems: "center",
            gap: "20px",
          }}
        >
          <IconButton>
            <Icon name="BellIcon" size="50" />
          </IconButton>
          <IconButton onClick={handleLogout}>
            <Icon name="LogoutIcon" size="50" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
