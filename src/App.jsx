import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Basket from "./pages/Basket/Basket";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "basket",
          element: <Basket/>,
        }
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
