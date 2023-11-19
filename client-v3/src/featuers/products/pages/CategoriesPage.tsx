import GetCategories from "../utils/GetCategories";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useStyles } from "../helpers/styles";
import { useNavigate } from "react-router-dom";
import ProductFiltering from "../components/CarsFiltering"; // Import the ProductFiltering component
import { CarInterface } from "../interfaces/interface";
import { addToCompare } from "../helpers/actionsCompare";

const CategoriesPage = () => {
  const cars: CarInterface[] = GetCategories();
  const navigate = useNavigate();
  const classes = useStyles();

  const isComparePage = window.location.pathname.endsWith("/compare");

  return (
    <Grid container spacing={2}>
      {/* Displaying categories on the left */}
      <Grid item xs={12} md={9}>
        <Grid container spacing={2}>
          {cars.map((car) => (
            <Grid item key={car.model} xs={12} sm={6} md={4} lg={3}>
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  height="150"
                  width="100%"
                  image={car.imageUrl}
                  alt={car.brand}
                  style={{ objectFit: "cover" }}
                  onClick={() => {
                    if (isComparePage) {
                      addToCompare(car);
                      navigate("/compare"); // Replace with your desired path
                    } else {
                      navigate(`/model/${car.model}`);
                    }
                  }}
                />
                <CardContent
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    padding: "8px",
                  }}
                >
                  <Typography variant="body1" color="black" align="left">
                    {car.brand} {car.model}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Sidebar for filtering on the right */}
      <Grid item xs={12} md={3}>
        <ProductFiltering />
      </Grid>
    </Grid>
  );
};

export default CategoriesPage;
