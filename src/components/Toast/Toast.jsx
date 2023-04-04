import React, { useContext } from "react";
import classNames from "classnames";
import { Context } from "../../context";
// import "./Toast.scss";
import styles from "./toast.module.scss";

const Toast = (item) => {
  const { notificationProps, setNotificationProps } = useContext(Context);

  const { visible, type, message = "" } = notificationProps;

  const handleClick = () => {
    setNotificationProps(false);
  };

  return (
    <div className={visible ? "notification" : "hidden"}>
      <div
        className={classNames(
          styles[`notification-${type}`],
          styles.notificationItem
        )}
      >
        {message}
        {visible && (
          <span className={styles.closeBtn} onClick={handleClick}>
            x
          </span>
        )}
      </div>
    </div>
  );
};

export default Toast;
