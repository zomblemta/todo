import { useEffect, useState } from "react";
import styles from "./index.module.css";
import SidebarLink, { linkDataType } from "../../components/SidebarLink";

export default () => {
  const [linkData, setLinkData] = useState<linkDataType[]>([]);

  useEffect(() => {
    setLinkData([
      {
        title: "overview",
        path: "/overview",
      },
      // {
      //   title: "理财",
      //   path: "/financialManagement",
      // },
      // {
      //   title: "跑步计划",
      //   path: "/run",
      // },
    ]);
  }, []);

  return (
    <div className={styles["sidebar-container"]}>
      {linkData.map((e) => {
        return <SidebarLink node={e} />;
      })}
    </div>
  );
};
