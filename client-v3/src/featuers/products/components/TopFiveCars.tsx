import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useStyles } from "../helpers/styles";
import { useNavigate } from "react-router-dom";
import { CarInterface } from "../interfaces/interface";
import { addToCompare } from "../helpers/actionsCompare";
import GetTopFiveCars from "../utils/GetTopFiveCars";

const TopFiveCars = () => {
  const cars: CarInterface[] = GetTopFiveCars();
  const navigate = useNavigate();
  const classes = useStyles();

  const isComparePage = window.location.pathname.endsWith("/compare");

  return (
    <Grid
      container
      spacing={2}
      marginY={7}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        paddingX: "150px", // Add padding here to create space around cards
        paddingBottom: 2,
      }}
    >
      {/* Displaying categories on the left */}
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
  );
};

export default TopFiveCars;
