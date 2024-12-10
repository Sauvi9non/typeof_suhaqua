import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import MainPage  from "./Routes/MainPage";
import TestPage from "./Routes/TestPage";
import ResultPage from "./Routes/ResultPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/typeof_suhaqua",
    element: <TestPage />,
    children: []
  },
  {
    path: "/result",
    element: <ResultPage />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
