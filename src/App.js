import React from "react";
import { ContextProvider } from "./Context/CrudContext";
import Display from "./Display";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Demo from "./Demo";
function App() {
  return (
    <>
      <ContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Demo />} />
            <Route path='/display' element={<Display />} />
          </Routes>
        </Router>
      </ContextProvider>
    </>
  );
}

export default App;
