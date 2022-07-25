import React from 'react'
import {
    Alignment,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
} from "@blueprintjs/core";
import FoundryLogin, { CSLogin } from '../Login/Login';


export default function Header() {
    
  return (
    <Navbar style={ {width: "100%"}}>
    <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading >Prod Services</NavbarHeading>
    </NavbarGroup>
    <NavbarGroup align={Alignment.RIGHT}>
        <FoundryLogin/>
        <NavbarDivider />
        <CSLogin/>
    </NavbarGroup>
    </Navbar>
  )
}
