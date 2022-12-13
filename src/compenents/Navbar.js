import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// styled-components
const NavStyle = styled.nav`
  width: 800px;
  padding: 30px;

  display: grid;
  grid-template-columns: 9fr 1.6fr 1.4fr 0.8fr;

  background-color: #9f8473;
  color: white;
  font-size: 35px;
  font-weight: 700;

  font-family: "Gowun Dodum", sans-serif;
`;

const Narbar = () => {
  // !! link는 나중에 컴포넌트 만들면 수정할 것

  return (
    <NavStyle>
      <h1>🐹 오늘 뭐 하찍</h1>
      <Link to="/">
        <i className="fa-solid fa-house"></i>
      </Link>
      <Link to="/">
        <i className="fa-regular fa-calendar-days"></i>
      </Link>
      <Link to="/">
        <i className="fa-regular fa-face-kiss-wink-heart"></i>
      </Link>
    </NavStyle>
  );
};

export default Narbar;
