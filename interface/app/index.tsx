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
    element: <Outlet />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/overview",
        element: <Layout />,
        // lazy: () => import("./Layout"),
        children: [
          // {
          //   path: "/",
          //   element: <>测试</>,
          // },
          // {
          //   path: "/run",
          //   element: <div>跑步计划</div>,
          // },
        ],
      },
    ],
  },
  {
    path: "/hello",
    element: <div>hello world</div>,
  },
];
