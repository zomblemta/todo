import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import styles from "./index.module.css";
import className from 'classnames'
import Header from "./Header";
import { DarkSpace } from "../components/DarkSpace";

export default () => {
  return (
    <div className={className(styles['layout-continer'],'flex',"color-change")}>
      <DarkSpace />
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
};
