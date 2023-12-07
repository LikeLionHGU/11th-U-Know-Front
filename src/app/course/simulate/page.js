"use client";

import React, { useEffect, useState } from "react";
import CustomTable from "@/components/CustomTable";
import TextField from "@mui/material/TextField";
import BACKGROUND from "../../../theme/palette";
import { Box, Button, Chip, Typography } from "@mui/material";
import Sidebar from "@/components/Sidebar/Sidebar";

import axiosInstance from "@/utils/axios";
import { getAllSimulateInfo } from "@/utils/lecture";
import { useRecoilState, useSetRecoilState } from "recoil";
import { LikeLiberalArts, LikeMajors } from "@/utils/atom";
import AddModal from "@/components/simulate/AddModal";
// import christmasImage from '../../../../public/ChristmasSale.png';

export default function page() {
  const [tables, setTables] = useState([]);
  const [restCredits, setRestCredits] = useState([]);
  // const [likeList, setLikeList] = useState([]);
  const [likeMajors, setLikeMajors] = useRecoilState(LikeMajors);
  const [likeLiberalArts, setLikeLiberalArts] = useRecoilState(LikeLiberalArts);

  useEffect(
    () => {
      getAllSimulateInfo().then((res) => {
        setTables(res.data[0]);
        setRestCredits(res.data[1]);
        setLikeMajors(res.data[2]);
        setLikeLiberalArts(res.data[2]);
      });
    },
    [
      // tables, restCredits, likeMajors, likeLiberalArts
    ]
  );

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "background.grey1",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "248px",
          backgroundColor: "#E5EAF2",
          paddingTop: "30px",
          paddingLeft: "123px",
        }}
      >
        <div
          style={{ display: "inline-block", width: "441px", height: "119px" }}
        >
          <p style={{ fontSize: "24px", fontWeight: "700" }}>졸업 시뮬레이션</p>
          <p>앞으로 어떻게 해야 졸업할 수 있을지 막막하시죠?</p>
          <p style={{ fontWeight: "700" }}>
            시뮬레이션을 통해 자유롭게 학기 별 계획을 세워보세요!
          </p>
        </div>
        <div style={{ paddingLeft: "450px", position: "relative" }}>
          <img src={`/img/Ellipse.png`} width="219px" height="152px" />
          <img
            alt="christmas Image"
            width="261px"
            height="147px"
            src={`/img/ChristmasSale.png`}
            style={{
              position: "absolute",
              left: 380,
              top: 0,
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <Box sx={{ px: "100px" }}>
        <Box
          sx={{
            py: "30px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <Typography
            sx={{
              fontSize: "19px",
              fontWeight: "500",
            }}
          >
            졸업을 위해 채워야 할 영역
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {restCredits.map((restCredit, idx) => (
              <Chip
                label={`${restCredit.lectureType} -> ${restCredit.needCredit}학점`}
                size="small"
                variant="outlined"
                sx={{
                  borderColor: "primary.main",
                  backgroundColor: "rgba(111, 164, 255 , 0.2)",

                  color: "primary.main",
                  px: "5px",
                  fontSize: "14px",
                  fontWeight: "500",
                  py: "7px",
                }}
              />
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            py: "30px",
            display: "flex",
            gap: "30px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: "15px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "19px",
                  fontWeight: "500",
                }}
              >
                졸업 시뮬레이션
              </Typography>
              <AddModal />
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "30px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "50px",
                }}
              >
                {tables.map((tableData) => (
                  <CustomTable tableData={tableData}></CustomTable>
                ))}
              </Box>
            </Box>
          </Box>
          <Sidebar button1={"전체과목"} button2={"찜한과목"} />
        </Box>
      </Box>
    </Box>
  );
}
