import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import { SurroundText, CornerBorder } from "../../components/titles";

export default function Home(props) {
  const { title, subtitle, about, pictures } = props.data;
  const theme = useTheme();

  const SubtitleText = styled(Box)`
    border-left: 5px solid ${theme.palette.tertiary.main};
    margin-left: 0;
    padding: 1rem 0 1rem 2rem;
    font-size: 2rem;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(
      35deg,
      ${theme.palette.primary.main},
      ${theme.palette.secondary.main}
    );
  `;

  const HomeSection = styled(Box)`
    display: flex;
    width: 100%;
    height: 80%;
    padding: 50px;
    gap: 10px;
    background: ${theme.palette.background.main};
  `;

  const GreetingTextBox = styled(Box)`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const GreetingImage = styled(Box)`
    border-radius: 999px;
    display: block;
    width: calc(100vw - 80px);
    max-width: 500px;
    max-height: 500px;
    object-fit: contain;
    overflow: hidden;
    background-color: ${theme.palette.tertiary.main};
  `;

  const GreetingImageWrapper = styled(Box)`
    position: relative;
    padding: 30px;

    &::after {
      content: "";
      border-radius: 999px;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: conic-gradient(
        from 30deg,
        ${({ theme }) => theme.palette.primary.main},
        ${({ theme }) => theme.palette.secondary.main} 50%,
        transparent 50%
      );
      -webkit-mask: radial-gradient(
        farthest-side,
        transparent calc(100% - 3px),
        #fff calc(100% - 3px + 1px)
      );
      mask: radial-gradient(
        farthest-side,
        transparent calc(100% - 3px),
        #fff calc(100% - 3px + 1px)
      );
    }
  `;

  const AboutText = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
  `;

  const StyledDivider = styled("svg")({
    width: "100%",
    height: "10vh",
    fill: theme.palette.background.main,
    background: theme.palette.background.secondary,
  });

  return (
    <>
      <Box sx={{ p: "30px", background: `${theme.palette.background.main}` }}>
        <SurroundText
          sx={{
            fontSize: "80px",
            borderRadius: "20px",
            border: `3px solid ${theme.palette.tertiary.main}`,
          }}
        >
          {title}
        </SurroundText>
      </Box>
      <HomeSection>
        <GreetingTextBox>
          <Box>
            <Typography
              variant="h1"
              sx={{
                paddingBottom: "50px",
                color: "#ffffff",
                fontWeight: "bold",
              }}
            >
              Welcome to my website!
            </Typography>
            <SubtitleText variant="h4">{subtitle}</SubtitleText>
          </Box>
        </GreetingTextBox>
        <Box sx={{ display: "flex", alignSelf: "center", marginX: "20px" }}>
          <GreetingImageWrapper>
            <GreetingImage component="img" src={pictures[0]} />
          </GreetingImageWrapper>
        </Box>
      </HomeSection>
      <Box sx={{ background: `${theme.palette.background.secondary}` }}>
        <StyledDivider viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 0 L50 100 L100 0 Z" />
        </StyledDivider>
      </Box>
      <HomeSection sx={{ background: `${theme.palette.background.secondary}` }}>
        <Box sx={{ display: "flex", alignSelf: "center", marginRight: "70px" }}>
          <GreetingImageWrapper>
            <GreetingImage
              component="img"
              src={pictures[1]}
              sx={{ objectFit: "cover" }}
            />
          </GreetingImageWrapper>
        </Box>
        <CornerBorder>
          <AboutText>
            <SurroundText>About Me</SurroundText>
            {about.map((item, index) => (
              <Typography
                key={index}
                variant="h6"
                sx={{ mt: "15px", color: "#ffffff" }}
              >
                {item}
              </Typography>
            ))}
          </AboutText>
        </CornerBorder>
      </HomeSection>
    </>
  );
}
