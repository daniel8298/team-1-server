import {
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Grid,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStylesCart } from "../helpers/styles";
import { CarInterface } from "../interfaces/interface";
import { useState } from "react";

type cartProps = {
  key: number;
  item: CarInterface;
  onDelete: (item: CarInterface) => void;
};

const CartItem = ({ item, onDelete }: cartProps) => {
  const classes = useStylesCart();
  const [amount, setAmount] = useState(1);

  const handleAdd = () => {
    setAmount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (amount > 1) {
      setAmount((prev) => prev - 1);
    }
  };

  const handleDelete = () => {
    onDelete(item);
  };

  return (
    <Card className={classes.root}>
      <img
        src={item.imageUrl}
        alt={item.model}
        style={{ maxWidth: "100%", maxHeight: "150px" }}
      />
      <CardContent sx={{ display: "flex", flexDirection: "row" }}>
        <div className={classes.detailsContainer}>
          <Typography variant="h5" component="h2">
            {item.brand} {item.model}
          </Typography>
          <Typography color="textSecondary">Color: {item.color}</Typography>
          <Typography variant="body2" component="p">
            Price: ${item.price}
          </Typography>
        </div>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            margin: "0 10px", // Adjust margin as needed
          }}
        />
        <CardActions>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <IconButton aria-label="remove" onClick={handleDecrease}>
                <RemoveIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography>{amount}</Typography>
            </Grid>
            <Grid item>
              <IconButton aria-label="add" onClick={handleAdd}>
                <AddIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton aria-label="delete" onClick={handleDelete}>
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default CartItem;
