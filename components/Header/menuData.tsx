import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 1,
    title: "Phones",
    path: "/phones",
    newTab: false,
  },
  {
    id: 1,
    title: "Morephones",
    path: "/morephones",
    newTab: false,
  },
  // {
  //   id: 4,
  //   title: "Phones",
  //   // path: "/phones",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 41,
  //       title: "I Phone",
  //       path: "/about",
  //       newTab: false,
  //     },
  //     {
  //       id: 42,
  //       title: "Samsung",
  //       path: "/contact",
  //       newTab: false,
  //     },
  //     {
  //       id: 43,
  //       title: "Pixel",
  //       path: "/blog",
  //       newTab: false,
  //     },
  //     {
  //       id: 47,
  //       title: "Realmi",
  //       path: "/signup",
  //       newTab: false,
  //     },
  //   ],
  // },
  {
    id: 2,
    title: "Search Guide",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Comparison",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "About Us",
    path: "/contact",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
