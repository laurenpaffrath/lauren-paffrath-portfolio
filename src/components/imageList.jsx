import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";


export default function Projects(props) {
  const { title, itemList } = props.data;
  const theme = useTheme();

  return (
    <>
      <ImageList
        cols={3}
        rowHeight={350}
        sx={{
          width: "100%",
          m: "0px",
        }}
      >
        {itemList.map((item) => (
          <ImageListItem
            sx={{ borderRadius: '10px', objectFit: "cover", overflow: "hidden", margin: "25px" }}
            component={Link}
            to={item.path}
            key={item.name}
          >
            <img src={item.images[0]} alt={item.name} loading="lazy" />
            <ImageListItemBar title={item.name} sx={{background: theme.palette.background.secondary}}/>
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}
