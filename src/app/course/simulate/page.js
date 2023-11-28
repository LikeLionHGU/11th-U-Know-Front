"use client"

import CustomTable from "@/components/CustomTable";
import TextField from '@mui/material/TextField';


export default function page() {
  return (
    <div>
      <div display="flex" style={{paddingBottom: "20px"}}>
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
