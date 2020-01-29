import React from "react";
import "./SideDrawer.css";

const SideDrawer = props => {
  const content = <aside className="side-drawer">{props.children}</aside>;

  //   below is a portal that you can find in index.html right above the root tag. the first argument below is whats being rendered, second is where
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
