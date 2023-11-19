import { TextField, Button, Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import UserInterface from "../interfaces/interfaces";
import SendUsers from "../utils/SendUsers";
import { useLocation } from "react-router-dom";

const ButtonRegistrationPage = () => {
  const location = useLocation();
  const { carsInCart } = location.state;

  const [user, setUser] = useState<UserInterface>({
    name: "",
    phoneNumber: "",
    email: "",
    address: "",
    note: "",
    id: "",
    status: "",
    cars: [],
  });

  const handleSubmit = (userData: UserInterface) => {
    SendUsers(userData);
  };

  return (
    <Container maxWidth="xs">
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        marginTop={15}
        marginBottom={5}
      >
        Costumer Details
      </Typography>
      <form style={{ marginTop: "16px" }}>
        <TextField
          label="Full Name"
          variant="standard"
          required
          fullWidth
          margin="normal"
          value={user.name}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <TextField
          label="Phone Number"
          variant="standard"
          required
          fullWidth
          margin="normal"
          value={user.phoneNumber}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, phoneNumber: e.target.value }))
          }
        />
        <TextField
          label="ID"
          variant="standard"
          required
          fullWidth
          margin="normal"
          value={user.id}
          onChange={(e) => setUser((prev) => ({ ...prev, id: e.target.value }))}
        />
        <TextField
          label="Address"
          variant="standard"
          required
          fullWidth
          margin="normal"
          value={user.address}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, address: e.target.value }))
          }
        />
        <TextField
          label="Email"
          variant="standard"
          required
          fullWidth
          margin="normal"
          value={user.email}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <TextField
          label="Delivery Note"
          variant="standard"
          fullWidth
          margin="normal"
          value={user.note}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, note: e.target.value }))
          }
        />
        <Box display="flex" justifyContent="space-around" margin="normal">
          {/* Centering the Button */}
          <Button
            variant="contained"
            onClick={() => {
              handleSubmit({
                id: user.id,
                email: user.email,
                address: user.address,
                name: user.name,
                phoneNumber: user.phoneNumber,
                status: "",
                note: user.note,
                cars: carsInCart,
              });
            }}
          >
            Purchase
          </Button>
          <Button>
            <img
              alt="PayPal"
              width="51"
              height="14"
              src="https://www.nike.com/assets/experience/pet/payment-icons/paypal@2x.png"
              className="css-v7ibj3 e1cllo3c1"
            ></img>
          </Button>
        </Box>
      </form>
    </Container>
  );
};
export default ButtonRegistrationPage;
