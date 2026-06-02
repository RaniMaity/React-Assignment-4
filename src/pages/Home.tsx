import { Box,  Typography } from "@mui/material";


const Home = () => {
  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Typography variant="h4">
        Welcome
      </Typography>

    </Box>
  );
};

export default Home;