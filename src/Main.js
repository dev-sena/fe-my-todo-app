import styled from "styled-components";
import GetDate from "./compenents/GetDate";

const MainStyle = styled.div`
  width: 800px;
  height: 85vh;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #efe6db;
`;

const Main = () => {
  return (
    <MainStyle>
      <GetDate />
    </MainStyle>
  );
};

export default Main;
