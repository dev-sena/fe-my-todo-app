import styled from "styled-components";
import GetDate from "../compenents/GetDate";
import CreateTodo from "../compenents/CreateTodo";

const MainStyle = styled.div``;

const Main = () => {
    return (
        <MainStyle>
            <GetDate className="date" />
            <CreateTodo />
        </MainStyle>
    );
};

export default Main;
