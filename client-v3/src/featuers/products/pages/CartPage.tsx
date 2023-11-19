import ButtonPurchase from "../components/ButtonCheckout";
import CartItem from "../components/CartItem";
import { carsInCart, deleteFromCart } from "../helpers/actionsCart";
import { useState } from "react";
import { CarInterface } from "../interfaces/interface";
import { Box } from "@mui/material";

const CartPage = () => {
  const cartItems = carsInCart();
  const [cart, setCart] = useState<CarInterface[]>(cartItems);

  const handleDeleteItem = (item: CarInterface) => {
    const updatedCart = deleteFromCart(item);
    setCart([...updatedCart]);
  };

  return (
    <div>
      <div>
        {cart.length === 0 ? (
          <Box display={"flex"} sx={{ justifyContent: "center" }}>
            <img
              src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-29/90/empty_cart-512.png"
              alt="Empty cart"
            />
          </Box>
        ) : (
          <div>
            {cart.map((item, i) => (
              <CartItem key={i} item={item} onDelete={handleDeleteItem} />
            ))}
          </div>
        )}
      </div>
      {cartItems.length > 0 && <ButtonPurchase carsInCart={cart} />}
    </div>
  );
};

export default CartPage;
