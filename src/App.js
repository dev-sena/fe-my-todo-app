import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./compenents/Navbar";
import Main from "./Main";
import styled from "styled-components";

// styled-components
const Wrapper = styled.nav`
  height: 99vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: rgb(248, 247, 245);
`;

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
