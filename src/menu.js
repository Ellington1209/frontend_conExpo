import React from "react";
import AvatarAppBar from "./components/molecules/drawer/AppBar/AppBar";




const Menu = props => {
  return (
    <AvatarAppBar>
     
      <div >      
        {props.children}
      </div>
    </AvatarAppBar>
  );
}

export default Menu;
