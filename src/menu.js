import { Box } from "@mui/material";
import React from "react";
import AvatarAppBar from "./components/molecules/drawer/AppBar/AppBar";

const Menu = (props) => {
  return (
    <AvatarAppBar>
      <Box>{props.children}</Box>
    </AvatarAppBar>
  );
};

export default Menu;
