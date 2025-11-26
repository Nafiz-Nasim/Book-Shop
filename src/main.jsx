import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { router } from './Routes/routes.jsx';



createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
