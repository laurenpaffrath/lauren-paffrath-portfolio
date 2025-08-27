import * as React from "react";
import { useTheme, styled } from "@mui/material/styles";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Typography } from "@mui/material";
import ImageStepper from "../../components/imageStepper";
import { SurroundText, CornerBorder } from "../../components/titles";
import useMediaQuery from '@mui/material/useMediaQuery';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <SelectedContent sx={{ p: 3 }}>{children}</SelectedContent>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const StyledTab = styled((props) => <Tab {...props} />)(
    ({ theme }) => ({
      color: theme.palette.white.main,
    }),
  );

const SelectedContent = styled(Box)`
  display: flex;
  width: 100%;
  gap: 20px;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`

const ContentSection = styled(Box)`
  width: 50%;
  align-self: center;

  @media (max-width: 1200px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

function TabContent(props) {
    const {name, images, description} = props.info;
    const theme = useTheme();
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md')); // Adjust the breakpoint as needed

    return(
        <>
            <ContentSection>
                <ImageStepper images={images}/>
            </ContentSection>
            <ContentSection color="#fff">
                <CornerBorder sx={{ m: isMediumScreen ? '5px' : '10px' }}>
                    <SurroundText sx={{letterSpacing: '0px'}}>{name}</SurroundText>
                    <Typography variant="h6" sx={{mt: "15px"}}>{description}</Typography>
                </CornerBorder>
            </ContentSection>
        </>
    )
}

export default function Experience(props) {
  const theme = useTheme();
  const { title, itemList } = props.data;
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md')); // Adjust the breakpoint as needed

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: `${theme.palette.background.main}`,
        }}
      >
        <Box sx={{padding: "30px",}}>
          <SurroundText
            sx={{
              fontSize: isMediumScreen ? '40px' : '80px',
              borderRadius: "20px",
              border: `3px solid ${theme.palette.tertiary.main}`,
            }}
          >
            {title}
          </SurroundText>
        </Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider", pt: "20px" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{color: "#fff", marginX: isMediumScreen ? '10px' : '30px'}}
        >
          <StyledTab label={itemList[0].tabname} {...a11yProps(0)} />
          <StyledTab label={itemList[1].tabname} {...a11yProps(1)} />
          <StyledTab label={itemList[2].tabname} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <TabContent info={itemList[0]}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TabContent info={itemList[1]}/>
      </CustomTabPanel>
       <CustomTabPanel value={value} index={2}>
        <TabContent info={itemList[2]}/>
      </CustomTabPanel>
      </Box>
    </>
  );
}
