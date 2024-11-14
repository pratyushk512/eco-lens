import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Consumer from './pages/consumer.jsx';
import AuthPage from './pages/login';
import Role from './pages/rewards-role.jsx';
import Landing from './pages/Landing';
import Qr from './pages/qr.jsx';
<<<<<<< HEAD
import Previousreports  from './pages/Previousreports.jsx';
=======
import FileUploader from './pages/scan-products.jsx';

>>>>>>> 31c18ecffc4c8ca659f392822c17683c45a1123d
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
      element: <FileUploader/>
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
