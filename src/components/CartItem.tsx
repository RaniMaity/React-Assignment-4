import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import type { CartItem as CartItemType } from "../Services/typescript/interface/Cart.interface";

interface Props {
  item: CartItemType;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  removeItem: (id: number) => void;
}

const CartItem = ({
  item,
  increaseQty,
  decreaseQty,
  removeItem,
}: Props) => {
  return (
    <Card
      sx={{
    borderRadius: 3,
    mb: 5,
    background: "linear-gradient(135deg, #ffffff 0%, #f9fbff 100%)",
    border: "1px solid #e6eaf0",
    boxShadow: "0 4px 18px rgba(0,0,0,0.06)",
    transition: "0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 12px 35px rgba(0,0,0,0.12)",
      border: "1px solid #d6e4ff",
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {item.title}
        </Typography>

        <Typography
          color="primary"
          sx={{ fontWeight: 700, mt: 1 }}
        >
          $ {item.price}
        </Typography>

        {/* SUBTOTAL */}
        <Typography
          sx={{ mt: 1, color: "text.secondary" }}
        >
          Subtotal: ${" "}
          {(item.price * item.quantity).toFixed(2)}
        </Typography>

        <Box
          sx={{
            mt: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {/* QTY CONTROL */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              background: "#f1f3f6",
              px: 2,
              py: 0.5,
              borderRadius: 20,
            }}
          >
            <Button
              size="small"
              onClick={() => decreaseQty(item.id)}
              sx={{
                minWidth: 30,
                borderRadius: "50%",
                background: "#fff",
              }}
            >
              -
            </Button>

            <Typography sx={{ fontWeight: 600 }}>
              {item.quantity}
            </Typography>

            <Button
              size="small"
              onClick={() => increaseQty(item.id)}
              sx={{
                minWidth: 30,
                borderRadius: "50%",
                background: "#fff",
              }}
            >
              +
            </Button>
          </Box>

          {/* REMOVE */}
          <Button
            color="error"
            variant="contained"
            onClick={() => removeItem(item.id)}
            sx={{
              textTransform: "none",
              borderRadius: 2,
              boxShadow: "none",
            }}
          >
            Remove
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CartItem;
