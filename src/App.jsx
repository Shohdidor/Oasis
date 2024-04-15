import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import Product from "./pages/Product/Product";
import ProductId from "./pages/ProductId/ProductId";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";



function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path: "/login",
      element: <Layout />,
      children: [
        {
          index:true,
          element: <Login />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "cart",
          element: <Cart/>,
        },
        {
          path: "product",
          element: <Product/>,
        },
        {
          path: "productId",
          element: <ProductId/>,
        },
        {
          path : "*",
          element : <NotFound />
        }
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
