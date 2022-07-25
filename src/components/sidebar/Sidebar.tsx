import { Icon } from "@blueprintjs/core";
import React from "react";
import { useState } from "react";
import {
  StyledSidebar,
  Toggler,
  TogglerContainer,
} from "../styles/Sidebar.styled";
import MenuItem from "./MenuItem";
import { SidebarProps, Location, MenuItemsGroupProps } from "./SidebarProps";

export default function Sidebar(props: SidebarProps) {
  const handleMenuItemClicked = (e: any, itemPath:string) => {
    console.log(`${itemPath} Clicked`)
  };
  const {
    isOpen = true,
    onMenuItemClicked = handleMenuItemClicked,
  } = props;

  const [isSidebarOpen, setIsSidebarOpen] = useState(isOpen);

  const handleToggler = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const getItemGroupJsx = (group: MenuItemsGroupProps, grpIndex: number) => {
    return (
      <React.Fragment key={grpIndex}>
        {group.items.map((item, index) => {
          return (
            <MenuItem
              name={item.name}
              key={item.name + index}
              isOpen={isSidebarOpen}
              icon={item.icon}
              to={item.to}
              onClick={(e) => onMenuItemClicked && onMenuItemClicked(e, item.name)}
            />
          );
        })}
      </React.Fragment>
    );
  };

  const getMenuGroupsJsx = (itemGroups: MenuItemsGroupProps[]) => {
    const topGroup = (
      <div key="top">
        <TogglerContainer key="toggle" onClick={() => handleToggler()}>
          <Toggler>
            <Icon
              icon={isSidebarOpen ? "menu-closed" : "menu-open"}
              color="grey"
              iconSize={24}
            />
          </Toggler>
        </TogglerContainer>
        {itemGroups
          .filter((group) => group.location === Location.top)
          .map((group, index) => getItemGroupJsx(group, index))}
      </div>
    );
    const bottomGroup = (
      <div key="bottom">
        {itemGroups
          .filter((group) => group.location === Location.bottom)
          .map((group, index) => getItemGroupJsx(group, index))}
      </div>
    );

    return (
      <>
        {topGroup}
        {bottomGroup}
      </>
    );
  };

  return <StyledSidebar>{getMenuGroupsJsx(props.itemGroups)}</StyledSidebar>;
}
