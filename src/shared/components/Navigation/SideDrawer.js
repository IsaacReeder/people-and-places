import React from "react";
import "./SideDrawer.css";

import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

const SideDrawer = props => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  //   below is a portal that you can find in index.html right above the root tag. the first argument below is whats being rendered, second is where
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
