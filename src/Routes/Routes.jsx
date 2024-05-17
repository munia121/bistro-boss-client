import {
  createBrowserRouter,

} from "react-router-dom";
import MainLayOut from "../Main/MainLayOut";
import Home from "../Pages/Home/Home/Home";
import MenuPage from "../Pages/Menu/Menu/MenuPage";
import Order from "../Pages/Order/Order/Order";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/menu',
        element:<MenuPage></MenuPage>
      },
      {
        path:'/order/:category',
        element:<Order></Order>
      }
    ]
  },
]);