import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginLayout from "./components/layout/LoginLayout";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminLayout from "./components/layout/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import Loading from "./components/Loading";
import SamplePage from "./pages/SamplePage";
import SampleCreateUser from "./pages/SamplePage/SampleCreateUser";

const HomePage = lazy(() => import("./pages/HomePage"));

export const router = createBrowserRouter([
  {
    path: "",
    element: <LoginLayout />,
    children: [
      { path: "/", element: <LoginPage /> },
      { path: "sample", element: <SamplePage /> }, //testing page
      { path: "sample-create-user", element: <SampleCreateUser /> }, //testing page
      { path: "*", element: <Navigate to="/404" /> },
      { path: "404", element: <NotFoundPage /> },
    ],
  },
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "home",
        element: (
          <Suspense fallback={<Loading />}>
            <ProtectedRoute element={<HomePage />} />
          </Suspense>
        ),
      },
    ],
  },
]);
