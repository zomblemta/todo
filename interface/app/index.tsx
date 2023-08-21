import { Navigate, Outlet } from "react-router";
import ErrorPage from "../ErrorPage";

const Index = () => {
  return <Navigate to={`/overview`} replace />;
};

export const routes = [
  {
    path: "/",
    element: (
      <div>
        <Outlet />
      </div>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/overview",
        lazy: () => import("./Layout"),
        children: [{}],
      },
    ],
  },
  {
    path: "/hello",
    element: <div>hello world</div>,
  },
];
