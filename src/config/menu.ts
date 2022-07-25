import { ISidebarProps, Location } from "../components/sidebar/SidebarProps"

export const sidebarProps: ISidebarProps = {
    isOpen: true,
    itemGroups : [
      {
        items : [
          {
            name:"Home",
            to: "/home",
            icon: "home",
            isOpen: false
          },
          {
            name:"Search",
            to: "/search",
            icon: "search",
            isOpen: false
          }
        ],
        location: Location.top
      },
      {
        items: [
          {
            name:"Help",
            to: "/home",
            icon: "help",
            isOpen: false
          },
          {
            name:"Profile",
            to: "/search",
            icon: "user",
            isOpen: false
          }
        ],
        location: Location.bottom,
      }
    ],

  }