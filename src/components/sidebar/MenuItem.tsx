import React from "react";
import { MenuItemProps } from "./SidebarProps";
import { Link } from "react-router-dom";
import { IconContainer, StyledMenuItem, Text } from "../styles/Sidebar.styled";
import { Icon } from "@blueprintjs/core";

function MenuItem(menuItemProps:MenuItemProps) {
  return (
    <StyledMenuItem {...menuItemProps}  >
      <Link to={menuItemProps.to} style={{ textDecoration: "none" }}>
        <IconContainer><Icon icon={menuItemProps.icon} size={25} /> </IconContainer>
        <Text show={menuItemProps.isOpen}></Text>
      </Link>
    </StyledMenuItem>
  );
}
export default MenuItem;
