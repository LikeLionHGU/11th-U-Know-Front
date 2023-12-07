import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import { TextField } from "@mui/material";
import ModalUI from "./ModalUI";

export default function AddModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        size="small"
        sx={{
          py: "7px",
          px: "10px",
          color: "layout.grey5",
          borderColor: "layout.grey5",
          border: 1,
          display: "flex",
          itemAlign: "center",
        }}
        onClick={handleOpen}
      >
        <AddIcon
          sx={{
            fontSize: "20px",
          }}
        />
        수강계획 추가하기
      </Button>
      <ModalUI
        open={open}
        handleClose={handleClose}
        title="수강계획을 추가해보아요"
        description="아래에 수강계획의 제목을 입력해주세요"
      />
    </div>
  );
}
