import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./routes/About";
import Post from "./Post";
import Blog from './routes/Blog';


export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About /> },
  { path: "/post/:postId", element: <Post/> },
  { path: "/blog", element: <Blog/> },

]);
