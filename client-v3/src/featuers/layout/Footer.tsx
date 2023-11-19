import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        zIndex: 1,
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: (theme) => theme.palette.background.paper,
        padding: (theme) => theme.spacing(2),
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="body1" color="textSecondary">
          {"🇺🇦"} Stand with Ukraine
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
