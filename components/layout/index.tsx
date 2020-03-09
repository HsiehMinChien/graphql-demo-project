import React, { ReactNode } from "react";
import Head from "next/head";
import cx from "classnames";

type LayoutPropsType = {
  className?: string;
  children: ReactNode;
};

const Layout = ({ className, children }: LayoutPropsType) => {
  return (
    <div className={cx("all-page-layout", className)}>
      <Head>
        <title>Jobs list Graphql demo project</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
