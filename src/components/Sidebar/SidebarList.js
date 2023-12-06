import { StarIcon } from "@/theme/overrides/CustomIcons";
import { lectureTaken, lectureUnTaken } from "@/utils/atom";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";

const data = {
  courses: [
    {
      id: 1,
      name: "Calculus 3",
      type: "필수",
      credit: 3,
    },
    {
      id: 2,
      name: "미분방정식응용",
      type: "필수",
      credit: 3,
    },
    {
      id: 3,
      name: "통계학",
      type: "필수",
      credit: 3,
    },
    {
      id: 4,
      name: "정수론",
      type: "필수",
      credit: 3,
    },
    {
      id: 5,
      name: "실해석학개론",
      type: "교선필",
      credit: 3,
    },
    {
      id: 6,
      name: "일반화학",
      type: "교선필",
      credit: 3,
    },
    {
      id: 7,
      name: "일반물리학",
      type: "선필",
      credit: 3,
    },
    {
      id: 8,
      name: "일반물리학실험",
      type: "선필",
      credit: 1,
    },
  ],
};

export default function SidebarList({
  setSearchWord,
  searchWord,
  isTakenSelected,
  setIsTakenSelected,
}) {
  const [leftData, setLeftData] = useRecoilState(lectureUnTaken);
  const [rightData, setRightData] = useRecoilState(lectureTaken);
  console.log(leftData, rightData);

  const dataFilter = (data) => {
    return data.filter((e) => e.name.includes(searchWord));
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        maxHeight: 340,
        bgcolor: "background.paper",
        overflow: "scroll",
      }}
    >
      {(isTakenSelected
        ? dataFilter(rightData.map((e) => e.lectureResponse))
        : dataFilter(leftData)
      )?.map((course) => (
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <StarIcon />
            </IconButton>
          }
        >
          <ListItemText
            primary={course.name}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {`${course.type} * ${course.credit}학점`}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}
