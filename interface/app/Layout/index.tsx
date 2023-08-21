import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

export default () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};
