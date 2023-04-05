import { createContext } from "react";

export const Context = createContext({
  list: [],
  setList: () => {},
  favorites: [],
  setFavorites: () => {},
  notificationProps: [],
  setNotificationProps: () => {},
});
