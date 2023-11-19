import axios from "axios";
import { useEffect, useState } from "react";

const GetCategories = () => {
  const [topCars, setTopCars] = useState([]);

  useEffect(() => {
    axios
      .get(`https://team-1-qrzb.onrender.com/products/topFive`)
      .then((res) => {
        setTopCars(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return topCars;
};

export default GetCategories;
