"use client"

import React from 'react';
import CustomTable from "@/components/CustomTable";
import TextField from '@mui/material/TextField';
import BACKGROUND from '../../../theme/palette'
import christmasImage from '../../../../public/ChristmasSale.png';



export default function page() {
  return (
    <div style={{width: "100%"}}>
      <div style={{display: "flex", width: "100%", height: "248px", backgroundColor: "#E5EAF2", paddingTop: "30px", paddingLeft: "123px"}}>
        <div style={{display: "inline-block", width: "441px", height: "119px"}}>
          <p style={{fontSize: "24px", fontWeight: "700"}}>졸업 시뮬레이션</p>
          <p>앞으로 어떻게 해야 졸업할 수 있을지 막막하시죠?</p>
          <p style={{fontWeight: "700"}}>시뮬레이션을 통해 자유롭게 학기 별 계획을 세워보세요!</p>
        </div>
        <div>
          <img alt='christmas Image' width="261px" height="147px" src={christmasImage} />
        </div>
      </div>
      <div display="flex" style={{paddingBottom: "20px", padding: "50px"}}>
          <h3 style={{paddingBottom: "36px"}}>수강계획 시뮬레이션</h3>
          <TextField
      sx={{ paddingRight: '8px', borderColor: '#6A61AB', color: '#6A61AB' }}
      disabled
      defaultValue="세계관 1  2학점 필요"
    />
          <TextField sx={{paddingRight: "8px", borderColor:"#6A61AB", colro: "#6A61AB"}} disabled defaultValue="세계관 1  2학점 필요"></TextField>
          <TextField sx={{borderColor:"#6A61AB"}} disabled defaultValue="세계관 1  2학점 필요"></TextField>
      </div>
      <CustomTable></CustomTable>
      <CustomTable></CustomTable>
    </div>
  );
}
