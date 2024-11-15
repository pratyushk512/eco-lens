import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Consumer from './pages/consumer.jsx';
import Role from './pages/rewards-role.jsx';
import Landing from './pages/Landing';
import Qr from './pages/qr.jsx';
import Previousreports from './pages/Previousreports.jsx';
import Login from './pages/login';
import SignUp from './pages/signup';
import ScanProduct from './pages/scan-products';
import Report from './pages/report.jsx';
import Home from './pages/home.jsx';
import Market from './pages/market.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/reports",
      element: <Report />
    },
    {
      path: "/scanProduct",
      element: <ScanProduct />
    },
    {
      path: "/pastScans",
      element: <Previousreports />
    },
    {
      path: "/rewards",
      element: <Role />
    },
    {
      path: "rewards/brands",
      element: <Qr />
    },
    {
      path: "/rewards/consumer",
      element: <Consumer />
    },
    {
      path: "/Landing",
      element: <Landing />
    },
    {
      path: "/market",
      element: <Market />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
