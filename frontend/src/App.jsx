import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Consumer from './pages/consumer.jsx';
import AuthPage from './pages/login';
import Role from './pages/rewards-role.jsx';
import Landing from './pages/Landing';
import Qr from './pages/qr.jsx';
import Previousreports  from './pages/Previousreports.jsx';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>Home</>,
    },
    {
      path: "/auth",
      element: <AuthPage/>,
    },
    {
      path:"/reports",
      element: <Previousreports/>
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
      element: <Role />
    },
    {
      path: "rewards/brands",
      element: <Qr/>
    },
    {
      path:"/rewards/consumer",
      element: <Consumer/>
    },
    {
      path:"/Landing",
      element: <Landing/>
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
