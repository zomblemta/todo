import { Navigate, Outlet, RouteObject } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import Layout from "./Layout";
import "./index.css";

const Index = () => {
  return <Navigate to={`/overview`} replace />;
};

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: '/run',
        element: <>run</>
      },
      {
        path: "/overview",
        element: <>overview</>,
        // lazy: () => import("./Layout"),
      },
    ],
  },
  {
    path: "/hello",
    element: <div>hello world</div>,
  },
];
