import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import { Box, Icon } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import { styled } from "@mui/material/styles";
import { Link } from 'react-router-dom';

export default function LinkList({resume, email, linkedin}) {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("")

    const ButtonContainer = styled(Box)`
        display: flex;
        justify-content: center;
        align-content: center;
        gap: 3px;
        margin-left: 20px;
        position: relative;
        right: 0px;
    `

  const copyToClipboard = () => {
    setMessage(`Copied '${email}' to clipboard`)
    setOpen(true);
    navigator.clipboard.writeText(email).then(() => {
      console.log("Text copied to clipboard");
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  };

  const downloadResume = () => {
    setMessage(`Successfully Downloaded Lauren_Paffrath_Resume.pdf`)
    setOpen(true);
    const url = resume;
    const link = document.createElement("a");
    link.href = url;
    link.download = "Lauren_Paffrath_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
  );

  return (
    <>
      <ButtonContainer>
        <IconButton component={Link} to = {linkedin}>
            <LinkedInIcon color="white" sx={{fontSize: "25px"}}/>
        </IconButton>
        <IconButton onClick={copyToClipboard}>
            <EmailIcon color="white" sx={{fontSize: "25px"}}/>
        </IconButton>
        <IconButton onClick={downloadResume}>
            <DownloadIcon color="white" sx={{fontSize: "25px"}}/>
        </IconButton>
      </ButtonContainer>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={action}
      />
    </>
  );
}