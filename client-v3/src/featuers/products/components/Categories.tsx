import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { carCategories } from "../helpers/carCategories";
import { useStyles } from "../helpers/styles";

const Categories = () => {
  const navigate = useNavigate();
  const classes = useStyles();

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
      {carCategories.map((category) => (
        <Grid item key={category.id} xs={12} sm={6} md={4} lg={3}>
          <Card className={classes.card}>
            <CardMedia
              component="img"
              height="150"
              width="100%"
              image={category.imageUrl}
              alt={category.title}
              style={{ objectFit: "cover" }}
              onClick={() => navigate(`/${category.title}`)}
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
                {category.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Categories;
