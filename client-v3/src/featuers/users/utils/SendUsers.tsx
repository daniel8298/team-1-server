import axios from "axios";

import UserInterface from "../interfaces/interfaces";

const SendUsers = (userData: UserInterface) => {
  console.log(userData);

  axios
    .post(`http://localhost:3000/users/registration`, userData)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default SendUsers;
