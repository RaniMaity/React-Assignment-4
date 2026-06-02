import {
  Container,
  Grid,
  CircularProgress,
  Typography,
  Box,
} from "@mui/material";
import { useContext, useEffect } from "react";
import { CreateCartContext } from "../context/cart/CreateCartContext";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const context = useContext(CreateCartContext);

  if (!context) return null;

  const { cartData, fetchProducts } = context;

  useEffect(() => {
    fetchProducts();
  }, []);

  if (cartData.isLoading) {
    return (
      <Box
        sx={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress size={50} />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        py: 4,
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, mb: 4, textAlign: "center" }}
        >
          Our Products
        </Typography>

        <Grid container spacing={3}>
          {cartData.products.map((product: any) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              key={product.id}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;
