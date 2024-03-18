import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import DiaryList from "./pages/diary/DiaryList.jsx";
import DiaryDetail from "./pages/diary/DiaryDetail.jsx";
import DiaryEdit from "./pages/diary/DiaryEdit.jsx";
import NewDiary from "./pages/diary/NewDiary.jsx";
import AllProducts from "./pages/mall/AllProducts.jsx";
import NewProduct from "./pages/mall/NewProduct.jsx";
import ProductDetail from "./pages/mall/ProductDetail.jsx";
import ProductEdit from "./pages/mall/ProductEdit.jsx";
import Profile from "./pages/profile/Profile.jsx";
import ProfileEdit from "./pages/profile/ProfileEdit.jsx";
import Register from "./pages/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/notfound",
        element: <NotFound />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/diaries",
        element: <DiaryList />,
      },
      { path: "/diary/new", element: <NewDiary /> },
      {
        path: "/diary/:id",
        children: [
          { index: true, element: <DiaryDetail /> },
          {
            path: "detail",
            element: <DiaryDetail />,
          },
          {
            path: "edit",
            element: <DiaryEdit />,
          },
        ],
      },
      {
        path: "/products",
        element: <AllProducts />,
      },
      {
        path: "/product/new",
        element: <NewProduct />,
      },
      {
        path: "/product/:id",
        children: [
          { index: true, element: <ProductDetail /> },
          {
            path: "detail",
            element: <ProductDetail />,
          },
          {
            path: "edit",
            element: <ProductEdit />,
          },
        ],
      },
      {
        path: "/profile/:id",
        children: [
          { index: true, element: <Profile /> },
          {
            path: "edit",
            element: <ProfileEdit />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
