import { useState, useMemo } from "react";
import Layout from "./components/Layout/Layout";
import { Context } from "./context";

function App() {
  const [list, setList] = useState([]);

  const value = useMemo(() => ({ list, setList }), [list]);

  return (
    <Context.Provider value={value}>
      <Layout />
    </Context.Provider>
  );
}

export default App;
