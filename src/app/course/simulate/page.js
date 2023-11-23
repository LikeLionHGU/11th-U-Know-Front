"use client"

import CustomTable from "@/components/CustomTable";
import TextField from '@mui/material/TextField';


export default function page() {
  return (
    <div>
      <h3 style={{paddingBottom: "36px"}}>수강계획 시뮬레이션</h3>
      <div style={{display: "flex"}}>
        <div style={{display: "block", paddingBottom: "12px", paddingLeft: "0px"}}><TextField disabled defaultValue='세계관 1 2학점 필요'></TextField></div>
        <div style={{display: "block", paddingBottom: "12px", paddingLeft: "8px"}}><TextField disabled defaultValue='세계관 1 2학점 필요'></TextField></div>
        <div style={{display: "block", paddingBottom: "12px", paddingLeft: "8px"}}><TextField disabled defaultValue='세계관 1 2학점 필요'></TextField></div>
      </div>
      <CustomTable></CustomTable>
    </div>
  );
}
