import React from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Terms from "./pages/Terms";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </>
  );
}

export default App;
