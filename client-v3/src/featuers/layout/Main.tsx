import { Container } from "@mui/material";
import { FC } from "react";

type MainProps = { children: JSX.Element | JSX.Element[] };

const Main: FC<MainProps> = ({ children }) => {
  return (
    <Container maxWidth="md" sx={{ marginBottom: "64px", marginTop: "90px" }}>
      {children}
    </Container>
  );
};

export default Main;
