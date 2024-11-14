import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>Home</>,
    },
    {
      path: "/login",
      element: <div>Login</div>,
    },
    {
      path: "/signup",
      element: <div>Sign up</div>, 
    },
    {
      path:"/report",
      element: <div>Product details and report</div>
    },
    {
      path:"/scanProduct",
      element: <div>Scan Product</div>
    },
    {
      path:"/pastScans",
      element: <div>Past Scanned Product</div>
    },
    {
      path:"/rewards",
      element: <div>Rewards Home</div>
    },
    {
      path:"/rewards/brands",
      element: <div>Brands Page</div>
    },
    {
      path:"/rewards/consumer",
      element: <div>Consumer Page</div>
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
