import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import GetCars from "../utils/GetCars";

import { CarInterface } from "../interfaces/interface";
import ButtonCompare from "../components/ButtonCompare";
import { addToCart } from "../helpers/actionsCart";

const ProductPage = () => {
  const car: CarInterface = GetCars()!;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {car && (
          <Card>
            <CardMedia
              component="img"
              height="300"
              image={car.imageUrl}
              alt={`${car.brand} ${car.model}`}
              style={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {`${car.brand} ${car.model}`}
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                gutterBottom
              >
                {car.category}
              </Typography>
              <Typography variant="body1" paragraph>
                {`Year: ${car.year}`}
              </Typography>
              <Typography variant="body1" paragraph>
                {`Color: ${car.color}`}
              </Typography>
              <Typography variant="body1" paragraph>
                {`Price: $${car.price.toLocaleString()}`}
              </Typography>
              <Typography variant="body1" paragraph>
                {`Specs: ${car.specs.engine}, ${car.specs.transmission}, ${car.specs.horsepower} HP`}
              </Typography>
              <Typography variant="body1" paragraph>
                {`Wheels: ${car.numOfWheels}, Doors: ${car.numOfDoors}, Wheel Size: ${car.wheelSize}"`}
              </Typography>

              <Button
                variant="contained"
                startIcon={<AddShoppingCartIcon />}
                color="primary"
                onClick={() => addToCart(car)}
                style={{ marginRight: "8px" }}
              >
                Add to Cart
              </Button>
              <ButtonCompare category={car.category} car={car} />
            </CardContent>
          </Card>
        )}
      </Grid>
    </Grid>
  );
};

export default ProductPage;
