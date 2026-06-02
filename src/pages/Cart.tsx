import {
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import { useContext } from "react";

import { CreateCartContext } from "../context/cart/CreateCartContext";

import CartItem from "../components/CartItem";

import PriceDetails from "../components/PriceDetails";

const Cart = () => {
  const context = useContext(CreateCartContext);

  if (!context) return null;

  const {
    cartData,
    removeItem,
    increaseQty,
    decreaseQty,
  } = context;

  const totalItems = cartData.cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const totalPrice = cartData.cartItems.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  return (
    
    <Container
  maxWidth="lg"
  sx={{
    py: 4,
    minHeight: "100vh",
    pb: 10,
  }}
>
      <Typography
        variant="h4"
        sx={{ mb: 5 }}
      >
        Shopping Cart
      </Typography>

      <Grid
        container
        spacing={3}
        sx={{ mb: 6 }}
      >
        <Grid
          size={{ xs: 12, md: 8 }}
        >
          <Stack spacing={2} sx={{ mb: 4 }}>
            {cartData.cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
                removeItem={removeItem}
              />
            ))}
          </Stack>
        </Grid>

        <Grid
          size={{ xs: 12, md: 4 }}
        >
          <PriceDetails
            totalItems={totalItems}
            totalPrice={totalPrice}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
