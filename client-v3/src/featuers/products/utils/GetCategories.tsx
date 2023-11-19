import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GetCategories = () => {
  const [cars, setCars] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    axios
      .get(`https://team-1-qrzb.onrender.com/products/${category}`)
      .then((res) => {
        setCars(res.data);
      })
      .catch((error) => console.error(error));
  }, [category]);

  return cars;
};

export default GetCategories;
