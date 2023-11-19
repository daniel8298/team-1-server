import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CarInterface } from "../interfaces/interface";

const GetCars = () => {
  const [car, setCar] = useState<CarInterface | null>(null);
  const { model } = useParams();

  useEffect(() => {
    axios
      .get(`https://team-1-qrzb.onrender.com/products/model/${model}`)
      .then((res) => {
        setCar(res.data);
      })
      .catch((error) => console.error(error));
  }, [model]);

  return car;
};

export default GetCars;
