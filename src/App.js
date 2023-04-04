import { useState, useMemo } from "react";
import Layout from "./components/Layout/Layout";
import Toast from "./components/Toast/Toast";
import { Context } from "./context";

function App() {
  const [list, setList] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [notificationProps, setNotificationProps] = useState({
    visible: false,
    type: "default",
  });

  const value = useMemo(
    () => ({
      list,
      setList,
      favorites,
      setFavorites,
      notificationProps,
      setNotificationProps,
    }),
    [list, favorites, notificationProps]
  );

  return (
    <Context.Provider value={value}>
      <Layout />
      <Toast />
    </Context.Provider>
  );
}

export default App;
