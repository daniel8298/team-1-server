// כפתור השוואה בין מוצרים

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CompareIcon from "@mui/icons-material/Compare";
import { CarInterface } from "../interfaces/interface";
import { addToCompare } from "../helpers/actionsCompare";

type CarProps = {
  category: string;
  car: CarInterface;
};

const ButtonCompare = ({ category, car }: CarProps) => {
  const navigate = useNavigate();
  return (
    <Button
      variant="contained"
      startIcon={<CompareIcon />}
      color="secondary"
      onClick={() => {
        addToCompare(car);
        navigate(`/${category}/compare`);
      }}
    >
      Compare
    </Button>
  );
};

export default ButtonCompare;
