import React, { useState } from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { StarIcon } from "@/theme/overrides/CustomIcons";
import { useRecoilState, useRecoilValue } from "recoil";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import axiosInstance from "@/utils/axios";
import { usePathname } from "next/navigation";
import {
  LikeLiberalArts,
  LikeMajors,
  clickedEnum,
  lectureTaken,
  lectureUnTaken,
} from "@/utils/atom";

export default function SidebarList({
  setSearchWord,
  searchWord,
  isTakenSelected,
  setIsTakenSelected,
}) {
  const pathname = usePathname();
  const enumValue = useRecoilValue(clickedEnum);
  const [leftData, setLeftData] = useRecoilState(
    pathname === "/course/simulate" ? LikeMajors : lectureUnTaken
  );
  const [rightData, setRightData] = useRecoilState(
    pathname === "/course/simulate" ? LikeLiberalArts : lectureTaken
  );

  // 새로 추가한 함수: 드래그 앤 드롭 이벤트 처리
  const onDragEnd = (result) => {
    const { source, destination } = result;

    // 목적지가 없거나 같은 위치로 이동한 경우 아무것도 하지 않음
    if (
      !destination ||
      (source.index === destination.index &&
        source.droppableId === destination.droppableId)
    ) {
      return;
    }

    let updatedData = Array.from(isTakenSelected ? rightData : leftData);
    const [reorderedItem] = updatedData.splice(source.index, 1);
    updatedData.splice(destination.index, 0, reorderedItem);

    // 업데이트된 데이터로 상태를 설정
    if (isTakenSelected) {
      setRightData(updatedData);
    } else {
      setLeftData(updatedData);
    }
  };

  const dataFilter = (data) => {
    if (searchWord === "" || !searchWord) return data;
    return data?.filter((e) => e?.name?.includes(searchWord));
  };

  const handleClick = (row) => {
    // console.log(row);
    if (pathname === "/course/simulate")
      axiosInstance.post(`/user/addPlanLecture/4/${row.id}/${enumValue}`);
    else axiosInstance.get(`/user/subjectFavorites/${row.id}/${enumValue}`);
  };

  return (
    <>
      <Droppable droppableId={`sidebarList`}>
        {(provided) => (
          <List
            ref={provided.innerRef}
            {...provided.droppableProps}
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
              : pathname === "/course/simulate"
              ? dataFilter(leftData.map((e) => e.lectureResponse))
              : dataFilter(leftData)
            )?.map((course, index) => (
              <Draggable
                key={course.id}
                draggableId={String(course.id)}
                index={index}
              >
                {(provided) => (
                  <ListItem
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    secondaryAction={
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => handleClick(course)}
                      >
                        {course?.isLiked ? (
                          <StarIcon
                            sx={{
                              color: "primary.main",
                            }}
                          />
                        ) : (
                          <StarOutlineIcon
                            sx={{
                              color: "primary.main",
                            }}
                          />
                        )}
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
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </>
  );
}
