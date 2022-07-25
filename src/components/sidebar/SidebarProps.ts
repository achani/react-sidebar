import { IconName } from "@blueprintjs/core";
import { LinkProps } from "react-router-dom";

export enum Location  {
    top="top",
    bottom="bottom"
}

/**@deprecated use MenuItemsGroupProps */
export interface IMenuItemsGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    items: MenuItemProps[];
    location: Location;
}

// eslint-disable-next-line 
export type MenuItemsGroupProps = IMenuItemsGroupProps


//Props for sidebar
/**@deprecated use SidebarProps */
export interface ISidebarProps extends React.HTMLAttributes<HTMLUListElement>{
    isOpen: boolean;
    itemGroups: MenuItemsGroupProps[];
    onMenuItemClicked?: (e:React.MouseEvent, itemPath: string)=> void;
}

// eslint-disable-next-line 
export type SidebarProps = ISidebarProps;


/**@deprecated use MenuItemProps */
export interface IMenuItemProps extends LinkProps{
    name:string;
    icon: IconName;
    isDisabled?:boolean,
    isSelected?: boolean,
    subMenuItems?: MenuItemProps[];
    isOpen: boolean;
}
  
// eslint-disable-next-line   
export type MenuItemProps = IMenuItemProps;