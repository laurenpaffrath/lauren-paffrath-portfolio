import { useTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const SurroundText = styled(Box)(({ theme }) => ({
  fontFamily: '"Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif',
  backgroundClip: 'text',
  color: theme.palette.tertiary.main,
  fontSize: '3em',
  fontWeight: 700,
  letterSpacing: '4px',
  padding: 'calc(10px / 2)',
  WebkitTextStrokeColor: 'transparent',
  WebkitTextStrokeWidth: '4px',
  textAlign: 'center',

  [theme.breakpoints.down('md')]: {
    fontSize: '2em',
  },
}));

const CornerBorder = styled(Box)(({ theme }) => ({
  position: 'relative',
  border: 'solid 0.5em transparent',
  padding: '1em',
  font: '1.25em ubuntu, sans-serif',
  '&::before': {
    position: 'absolute',
    inset: 'calc(-1 * 0.5em)',
    border: 'inherit',
    borderRadius: '2em',
    background: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.tertiary.main}, ${theme.palette.secondary.main}) border-box`,
    WebkitMask: 'conic-gradient(from -90deg at 3em 3em, red 25%, #0000 0) 0 0 / calc(100% - 3em) calc(100% - 3em) border-box, conic-gradient(red 0 0) padding-box',
    WebkitMaskComposite: 'source-out',
    mask: 'conic-gradient(from -90deg at 3em 3em, red 25%, #0000 0) 0 0 / calc(100% - 3em) calc(100% - 3em) border-box subtract, conic-gradient(red 0 0) padding-box',
    content: '""',
  },
}));

export { SurroundText, CornerBorder };
