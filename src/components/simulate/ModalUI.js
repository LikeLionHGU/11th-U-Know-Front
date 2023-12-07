import axiosInstance from "@/utils/axios";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  width: "500px",
  height: "300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "15px",
  borderRadius: "20px",
};

export default function ModalUI({ open, handleClose, title, description }) {
  const [tableName, setTableName] = useState("");

  const handleMakeTable = async () => {
    const postTable = await axiosInstance.post("/user/addPlanTable", {
      tableName: tableName,
    });
    postTable();
    // postTable().then((res) => {
    //   console.log(res.data);
    // });
  };

  const handleChange = (e) => {
    setTableName(e.target.value);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h5">
          {title}
        </Typography>

        <Typography id="modal-modal-description" variant="body1">
          {description}
        </Typography>

        <TextField value={tableName} onChange={handleChange} />

        <Box
          sx={{
            display: "flex",
            gap: "10px",
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: "100%",
              height: "50px",
            }}
            color="inherit"
            onClick={handleClose}
          >
            취소
          </Button>
          <Button
            variant="contained"
            sx={{
              width: "100%",
              height: "50px",
            }}
            color="primary"
            onClick={handleMakeTable}
          >
            저장
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
