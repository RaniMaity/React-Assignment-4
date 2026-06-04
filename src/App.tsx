import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";

import { theme } from "./theme/theme";
import router from "./Routes/Routes";

import CartProvider from "./context/cart/CartProvider";
import { FormProvider } from "./context/form/FormProvider";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

   
      <CartProvider>
        <FormProvider>
          <RouterProvider router={router} />
        </FormProvider>
      </CartProvider>

    </ThemeProvider>
  );
};

export default App;