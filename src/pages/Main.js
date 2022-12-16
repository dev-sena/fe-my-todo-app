import styled from 'styled-components';

import GetDate from '../compenents/GetDate';
import CreateTodo from '../compenents/CreateTodo';
import TodoList from '../compenents/TodoList';

const MainStyle = styled.div``;

const Main = () => {
  return (
    <MainStyle>
      <GetDate className="date" />
      <CreateTodo />
      <TodoList />
    </MainStyle>
  );
};

export default Main;
