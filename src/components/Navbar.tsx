import { AppBar, Toolbar, Typography, Button, Box, Badge } from "@mui/material";

import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { CreateCartContext } from "../context/cart/CreateCartContext";

const Navbar = () => {
  const location = useLocation();
  const context = useContext(CreateCartContext);

  if (!context) return null;

  const { cartData } = context;

  const totalItems = cartData.cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );

  const isHome = location.pathname === "/";
  const isProducts = location.pathname === "/products";
  const isCartPage = location.pathname === "/cart";
  const isForm = location.pathname.startsWith("/form");

 
  const showCartIcon = isProducts || isCartPage; 

  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* LOGO */}
        <Typography
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            color: "#fff",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          {isProducts || isForm || isCartPage ? "My Store" : "Welcome"}
        </Typography>

        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          
          {isHome && (
            <>
              <Button component={Link} to="/products" sx={{ color: "#fff" }}>
                Shopping Cart
              </Button>

              <Button component={Link} to="/form" sx={{ color: "#fff" }}>
                Wizard Form
              </Button>
            </>
          )}

  
          {showCartIcon && (
            <Button
              component={Link}
              to="/cart"
              sx={{ color: "#fff", display: "flex", gap: 1 }}
            >
              <Badge badgeContent={totalItems} color="error">
                <ShoppingCart size={22} />
              </Badge>

              <span>Cart</span>
            </Button>
          )}

   
          {!isHome && (
            <Button component={Link} to="/" sx={{ color: "#fff" }}>
              Home
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
