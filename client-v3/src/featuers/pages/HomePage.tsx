import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Categories from "../products/components/Categories"; // Import your Categories component
import { backgroundStyle, textStyle } from "../products/helpers/styles";
import TopFiveCars from "../products/components/TopFiveCars";

const HomePage = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showTopFive, setShowTopFive] = useState(false);

  const handleCategoryHover = () => {
    setShowCategories(true);
    setShowTopFive(false); // Hide TopFiveCars when hovering over Categories
  };

  const handleTopFiveHover = () => {
    setShowTopFive(true);
    setShowCategories(false); // Hide Categories when hovering over TopFiveCars
  };

  const handleClickOutside = () => {
    setShowCategories(false);
    setShowTopFive(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Box sx={backgroundStyle}>
      <Box sx={textStyle}>
        <Typography
          variant="h4"
          color="white"
          onMouseEnter={handleCategoryHover}
          id="categories-text"
          style={{ cursor: "pointer" }}
        >
          Categories
        </Typography>
        <Typography
          variant="h4"
          color="white"
          onMouseEnter={handleTopFiveHover}
          id="topFive-text"
          style={{ cursor: "pointer" }}
        >
          Top Cars
        </Typography>
      </Box>
      {showCategories && !showTopFive && (
        <Box sx={{ marginTop: "100px" }}>
          <Categories />
        </Box>
      )}
      {showTopFive && !showCategories && (
        <Box sx={{ marginTop: "100px" }}>
          <TopFiveCars />
        </Box>
      )}
    </Box>
  );
};

export default HomePage;
