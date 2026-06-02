import {
  Card,
  CardContent,
  Divider,
  Typography,
  Box,
} from "@mui/material";

interface Props {
  totalItems: number;
  totalPrice: number;
}

const PriceDetails = ({
  totalItems,
  totalPrice,
}: Props) => {
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        position: "sticky",
        top: 24,mt:3
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Typography
          variant="h6"
          fontWeight={700}
        >
          PRICE DETAILS
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: 1,
          }}
        >
          <Typography>
            Price ({totalItems} items)
          </Typography>
          <Typography>
            $ {totalPrice.toFixed(2)}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: 1,
          }}
        >
          <Typography>
            Delivery Charges
          </Typography>
          <Typography
            color="success.main"
            fontWeight={600}
          >
            FREE
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: 2,
            borderRadius: 2,
            background: "#f6f9ff",
          }}
        >
          <Typography fontWeight={700}>
            Total Amount
          </Typography>
          <Typography fontWeight={700}>
            ${totalPrice.toFixed(2)}
          </Typography>
        </Box>

        <Typography
          mt={2}
          color="success.main"
          fontWeight={600}
        >
          You will save on delivery charges
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PriceDetails;