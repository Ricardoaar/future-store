import React, { PropsWithChildren } from "react";
import classNames from "classnames";
import styles from "./Divider.module.sass";
import { DividerSize } from "@/app/components/shared/Divider/Divider.types";


interface DividerProps {
  size: DividerSize;
}

export const Divider: React.FC<PropsWithChildren<DividerProps>> = ({ children, size }) => {

  return (
    <div className={
      classNames(styles.divider, {
        [styles.small]: size === DividerSize.small,
        [styles.medium]: size === DividerSize.medium,
        [styles.big]: size === DividerSize.large
      })
    }>
      {children && <span>{children}</span>}
    </div>
  );
};

export default Divider;