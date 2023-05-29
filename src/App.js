import Home from "./components/pages/home/home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import FullPost1 from "./components/pages/posts/fullPost/fullPost1";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";


const Layout = () => {
  return (
    <div className="app">
      <Navbar/>
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog/:id",
        element: <FullPost1 />,
      },
    ],
  },
]);



function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


