import ImageStepper from "./imageStepper";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useTheme, styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { SurroundText, CornerBorder } from "./titles";

export default function ItemInfo() {
  const data = useLoaderData();
  const theme = useTheme();
  const { name, images, description } = data;

  const ProjectContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    background-color: ${theme.palette.background.main};
    width: 100%;
    gap: 10px;
    color: white;
    text-align: center;
    gap: 50px;
  `;

  const ImageContainer = styled(Box)`
    max-width: 600px;
    max-height: 600px;
    object-fit: contain;
    margin: auto;
    border-radius: 10px;
  `;

  const StyledDivider = styled("svg")({
    width: "100%",
    height: "10vh",
    fill: theme.palette.background.main,
    background: theme.palette.background.secondary,
  });

  return (
    <>
      <ProjectContainer>
        <SurroundText>{name}</SurroundText>
        <ImageContainer component="img" src={images[0]} />
        <CornerBorder sx={{m: '50px'}}>
          <Typography sx={{ width: "80%", m: "auto" }} variant="h6">
            {description}
          </Typography>
        </CornerBorder>
        <Box>
        <Box sx={{ background: `${theme.palette.background.secondary}` }}>
          <StyledDivider viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 0 L50 100 L100 0 Z" />
          </StyledDivider>
        </Box>
        <ImageList
          rowHeight="2100px"
          colWidth="1500px"
          cols={3}
          sx={{ background: `${theme.palette.background.secondary}`, mt: 0, px: '50px', py: '50px', mb: 0 }}
        >
          {images.map((item) => (
            <ImageListItem
              key={item}
              sx={{
                borderRadius: "10px",
                objectFit: "cover",
                overflow: "hidden",
                m: "10px",
              }}
            >
              <img src={item} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
        </Box>
      </ProjectContainer>
    </>
  );
}
