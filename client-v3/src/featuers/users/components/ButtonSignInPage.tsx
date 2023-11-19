import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ButtonSignInPage = () => {
  const navigate = useNavigate();
  return (
    <Button sx={{ color: "white" }} onClick={() => navigate(`/signIn`)}>
      Log In
    </Button>
  );
};

export default ButtonSignInPage;
