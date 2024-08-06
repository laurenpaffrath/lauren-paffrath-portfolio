import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Link } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme, styled } from "@mui/material/styles";


export default function Projects(props) {
  const { title, itemList } = props.data;
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md')); // Adjust the breakpoint as needed

  const StyledImageListItem = styled(ImageListItem)`
    border-radius: 10px;
    object-fit: cover;
    overflow: hidden;
    margin: 25px;

    @media (max-width: 1000px) {
      margin: 5px
    }
  `

  return (
      <ImageList
        cols={isMediumScreen ? 2 : 3}
        rowHeight={isMediumScreen ? 200 : 350}
        sx={{
          width: "100%",
          m: "0px",
        }}
      >
        {itemList.map((item) => (
          <StyledImageListItem
            component={Link}
            to={item.path}
            key={item.name}
          >
            <img src={item.images[0]} alt={item.name} loading="lazy" />
            <ImageListItemBar title={item.name} sx={{background: theme.palette.background.secondary}}/>
          </StyledImageListItem>
        ))}
      </ImageList>
  );
}
