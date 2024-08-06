import * as React from "react";
import ImageList from "../../components/imageList";
import { SurroundText, CornerBorder } from "../../components/titles";
import { Box } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";

export default function Research(props) {
    const theme = useTheme();

  return (
    <Box
    sx={{
      backgroundColor: `${theme.palette.background.main}`,
      padding: "30px",
    }}
  >
    <SurroundText
      sx={{
        fontSize: "80px",
        borderRadius: "20px",
        border: `3px solid ${theme.palette.tertiary.main}`,
      }}
    >
      {props.data.title}
    </SurroundText>
    <CornerBorder sx={{ marginTop: "30px" }}>
      <ImageList data={props.data} />
    </CornerBorder>
  </Box>
  );
}
