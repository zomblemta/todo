import Switch from "../../components/Switch";
import styles from "./index.module.css";

export default () => {
  return (
    <div className={styles["layout-header"]}>
      <div className={styles["header-continer"]}>
        <div className={styles["header-left"]}></div>
        <div className={styles["header-right"]}>
          <div className={styles["system-settings"]}>
            <Switch
              onChange={(checked) => {
                const body = document.getElementsByTagName("html")[0];
                if (body) {
                  checked
                    ? (body.className = "dark")
                    : (body.className = "day");
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
