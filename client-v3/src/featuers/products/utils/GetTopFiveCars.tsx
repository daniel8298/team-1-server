import axios from "axios";
import { useEffect, useState } from "react";

const GetCategories = () => {
  const [topCars, setTopCars] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/topFive`)
      .then((res) => {
        setTopCars(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return topCars;
};

export default GetCategories;
