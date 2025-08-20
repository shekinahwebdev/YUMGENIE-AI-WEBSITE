import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
// import MenuPage from "./pages/MenuPage";
import RootLayout from "./RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Homepage /> },
      //   { path: "/menu", element: <MenuPage /> },
    ],
  },
]);
