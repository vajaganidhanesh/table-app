import React from "react";
import { ContextProvider } from "./Context/CrudContext";
import Display from "./Display";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Demo from "./Demo";
import ReducerCrud from "./ReducerCrud";

function App() {
  return (
    <>
      <ContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Demo />} />
            <Route path='/reducer' element={<ReducerCrud />} />
            <Route path='/display' element={<Display />} />
          </Routes>
        </Router>
      </ContextProvider>
    </>
  );
}

export default App;
