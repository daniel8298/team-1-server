import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ButtonHome = () => {
  const navigate = useNavigate();
  return (
    <Button
      sx={{
        fontFamily: "Black Ops One, sans-serif",
        fontSize: "20px",
        color: "black",
        border: 0,
      }}
      onClick={() => navigate("/")}
    >
      Hot Wheels
    </Button>
  );
};

export default ButtonHome;
