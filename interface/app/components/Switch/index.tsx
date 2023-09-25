import { ReactNode, useState } from "react";
import "./index.css";
import classNames from "classnames";

type SwitchProps = {
  checkedChildren?: ReactNode;
  unCheckedChildren?: ReactNode;
  onChange?: (checked: boolean) => void;
};

export default (props: SwitchProps) => {
  const { checkedChildren, unCheckedChildren ,onChange} = props;
  const [checked, setChecked] = useState(false);
  return (
    <>
      <button
        role="switch"
        className={"td-switch"}
        onClick={() => {
          setChecked(!checked);
          onChange?.(checked)
        }}
      >
        <div
          className={classNames("td-switch-handle", "color-change",{
            "td-switch-handle-checked": checked,
          })}
        ></div>
      </button>
      <span className="td-switch-inner">
        {checked ? checkedChildren : unCheckedChildren}
      </span>
    </>
  );
};
