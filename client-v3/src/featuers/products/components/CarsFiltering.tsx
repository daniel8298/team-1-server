import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

const ProductFiltering = () => {
  return (
    <div className="sidebar">
      {/* Horsepower slider */}
      <Typography id="horsepower-slider" gutterBottom>
        Horsepower
      </Typography>
      <Slider
        valueLabelDisplay="auto"
        aria-labelledby="horsepower-slider"
        min={0}
        max={500}
      />

      {/* Price slider */}
      <Typography id="price-slider" gutterBottom>
        Price
      </Typography>
      <Slider
        valueLabelDisplay="auto"
        aria-labelledby="price-slider"
        min={0}
        max={100000}
      />

      {/* Wheel size slider */}
      <Typography id="wheel-size-slider" gutterBottom>
        Wheel Size
      </Typography>
      <Slider
        valueLabelDisplay="auto"
        aria-labelledby="wheel-size-slider"
        min={14}
        max={24}
      />

      {/* Engine slider */}
      <Typography id="engine-slider" gutterBottom>
        Engine
      </Typography>
      <Slider
        valueLabelDisplay="auto"
        aria-labelledby="engine-slider"
        min={4}
        max={12}
      />
    </div>
  );
};

export default ProductFiltering;
