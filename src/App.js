import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from './compenents/Navbar';
import Main from './pages/Main';
import Author from './pages/Author';

// styled-components
const Wrapper = styled.div`
  height: 92vh;

  background-color: #efe6db;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  /* 가운데 정렬 */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/author" element={<Author />} />
          </Routes>
        </div>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
