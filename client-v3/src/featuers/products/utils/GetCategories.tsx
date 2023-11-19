import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GetCategories = () => {
  const [cars, setCars] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${category}`)
      .then((res) => {
        setCars(res.data);
      })
      .catch((error) => console.error(error));
  }, [category]);

  return cars;
};

export default GetCategories;
