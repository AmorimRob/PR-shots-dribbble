import React from "react";
import "./MenuItem.css";

const MenuItem = (props) => {
  return (
    <div className="menuContainer" style={{ width: props.witdh }}>
      <p className="textoMenu">{props.menuItem}</p>
    </div>
  );
};

export default MenuItem;
