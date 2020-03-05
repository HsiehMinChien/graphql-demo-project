import React, { ReactNode } from "react";
import cx from "classnames";

type LayoutPropsType = {
  className?: string;
  children: ReactNode;
};

const Layout = ({ className, children }: LayoutPropsType) => {
  return <div className={cx("all-page-layout", className)}>{children}</div>;
};

export default Layout;
