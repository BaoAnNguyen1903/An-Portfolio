import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './layout.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";  
import HomePage from './pages/home.tsx';
import ProjectPage from './pages/project.tsx';
import AboutPage from './pages/about.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/projects",
        element: <ProjectPage />,
      },
      {
        path: "/about",
        element: <AboutPage />
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <AppContextProvider> */}
      <RouterProvider router={router} />
    {/* </AppContextProvider> */}
  </StrictMode>,
)
