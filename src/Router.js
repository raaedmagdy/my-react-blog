import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/create", element: <Create /> },
  { path: "/blogs/:id", element: <BlogDetails /> },
  { path: "*", element: <NotFound /> },
]);
