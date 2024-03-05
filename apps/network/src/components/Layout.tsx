import React from "react";
import MyNetworkContainer from "../containers/my-network-container";
import { center, left, wrapper } from "./layout.css";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={wrapper}>
      <div className={left}>
        <MyNetworkContainer />
      </div>
      <div className={center}>{children}</div>
    </div>
  );
};

export default Layout;
