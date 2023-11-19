// כפתור רכישה

import { Button } from "@mui/material";
import { CarInterface } from "../interfaces/interface";
import { useNavigate } from "react-router-dom";

type purchaseProps = {
  carsInCart: CarInterface[];
};

const ButtonCheckout = ({ carsInCart }: purchaseProps) => {
  const navigate = useNavigate();
  return (
    <Button
      variant="contained"
      color="primary"
      aria-label="Checkout"
      onClick={() => navigate("/registration", { state: { carsInCart } })}
    >
      Checkout
    </Button>
  );
};

export default ButtonCheckout;
