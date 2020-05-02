import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../../assets/logo.png";
import MenuItem from "../MenuItem/MenuItem";

const Menu = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "white" }}>
      <Toolbar variant="dense">
        <img src={logo} style={{ marginRight: 30, width: 110, height: 50 }} />
        <MenuItem menuItem="FOR WRITERS & INFLUENCERS" witdh={200} />
        <MenuItem menuItem="FOR BRANDS" />

        <div style={{ display: "flex", marginLeft: "auto" }}>
          <MenuItem menuItem="LOGIN" />
          <MenuItem menuItem="SIGN UP" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
