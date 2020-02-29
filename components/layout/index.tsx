import React, { ReactNode } from "react";
import cx from "classnames";
import "./style.styl";

type LayoutPropsType = {
  className?: string;
  children: ReactNode;
};

const Layout = ({ className, children }: LayoutPropsType) => {
  return (
    <div className={cx("layout", className)}>
      <div className="layout-top" />
      <div className="layout-middle" />
      {children}
      <div className="layout-bottom">GraphQL demo project</div>
    </div>
  );
};

export default Layout;
