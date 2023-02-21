import React from "react";
import { ContextProvider } from "./Context/CrudContext";
import Display from "./Display";
function App() {
  return (
    <>
      <ContextProvider>
        <Display />
      </ContextProvider>
    </>
  );
}

export default App;
