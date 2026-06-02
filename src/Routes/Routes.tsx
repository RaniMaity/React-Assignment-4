import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Products from "../pages/Products";
import WizardForm from "../pages/WizardForm";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />, 
      },
      {
        path: "products",
        element: <Products />,
      },
      {
          path: "cart",
        element: <Cart />,
      },
      {
        path: "form",
        element: <WizardForm />,
      },
    ],
  },
]);

export default router;