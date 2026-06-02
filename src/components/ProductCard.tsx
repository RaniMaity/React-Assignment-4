import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

import { useContext } from "react";
import { CreateCartContext } from "../context/cart/CreateCartContext";
import type { Product } from "../Services/typescript/interface/Cart.interface";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const context = useContext(CreateCartContext);

  if (!context) return null;

  const { addItem } = context;

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        backgroundColor: "#fff",
        border: "1px solid #eaeaea",
        mt:3,
        transition: "all 0.25s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
        },
      }}
    >
      {/* IMAGE WRAPPER */}
      <Box
        sx={{
          height: 210, 
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f7f7f7",
          padding: 1.5,
        }}
      >
        <CardMedia
          component="img"
          image={product.thumbnail}
          alt={product.title}
          sx={{
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",

        
          justifyContent: "space-between",
          paddingBottom: "16px !important",
        }}
      >
      
        <Typography
          variant="subtitle1"
          fontWeight={600}
          sx={{
            fontSize: "15px",

          
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",

            minHeight: 44,
          }}
        >
          {product.title}
        </Typography>

        {/* PRICE */}
        <Typography
          sx={{
            color: "#1a8f3c",
            fontWeight: 700,
            fontSize: "18px",
            mt: 1,
          }}
        >
          $ {product.price}
        </Typography>

        
        <Box sx={{ mt: 2 }}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => addItem(product)}
            sx={{
              textTransform: "none",
              borderRadius: "8px",
              padding: "9px 0",
              fontWeight: 600,
              fontSize: "14px",
   backgroundColor: "#2874f0",
              "&:hover": {
                backgroundColor: "#1f5fc4",
              },
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;