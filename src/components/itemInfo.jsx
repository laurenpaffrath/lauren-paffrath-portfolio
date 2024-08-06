import ImageStepper from "./imageStepper";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useTheme, styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { SurroundText, CornerBorder } from "./titles";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ItemInfo() {
  const data = useLoaderData();
  const theme = useTheme();
  const { name, images, description } = data;
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md')); // Adjust the breakpoint as needed
  
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

    @media (max-width: 600px) {
      padding-left: 5px;
      padding-right: 5px;
      width: 100%;
    }
  `;

  const StyledDivider = styled("svg")({
    width: "100%",
    height: "10vh",
    fill: theme.palette.background.main,
    background: theme.palette.background.secondary,
  });

  const StyledImageList = styled(ImageList)`
    margin-top: 0;
    margin-bottom: 0;
    padding: '50px';
    mb: 0;
    background: ${theme.palette.background.secondary};

    @media (max-width: 1000px) {
      padding: 5px;
    }
  `

  return (
    <>
      <ProjectContainer>
        <SurroundText>{name}</SurroundText>
        <ImageContainer component="img" src={images[0]} />
        <CornerBorder sx={{ m: isMediumScreen ? '10px' : '50px' }}>
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
        <StyledImageList
          rowHeight="2100px"
          colWidth="1500px"
          cols={isMediumScreen ? 2 : 3}
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
        </StyledImageList>
        </Box>
      </ProjectContainer>
    </>
  );
}
