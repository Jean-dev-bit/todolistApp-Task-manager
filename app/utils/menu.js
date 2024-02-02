import { list, check, todo, home } from "./Icons";

const menu = [
  {
    id: 1,
    title: "Tâches",
    icon: home,
    link: "/",
  },
  {
    id: 2,
    title: "Important!",
    icon: list,
    link: "/important",
  },
  {
    id: 3,
    title: "Complete!",
    icon: check,
    link: "/completed",
  },
  {
    id: 4,
    title: "Incomplete!",
    icon: todo,
    link: "/incomplete",
  },
];

export default menu;
