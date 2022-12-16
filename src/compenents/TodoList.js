import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

// styled-components
const TodoListStyle = styled.div`
  height: 59vh;
  margin-top: 30px;

  /* background-color: #c7b299; */
  font-family: 'Gowun Dodum', sans-serif;
  font-size: 23px;

  display: flex;
  flex-direction: column;
  align-items: center;

  /* 스크롤 꾸밈 */
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0);
  }
  &::-webkit-scrollbar-thumb {
    background: #9f8473;
    border-radius: 6px;
  }

  li {
    width: 690px;
    display: grid;
    grid-template-columns: 1fr 12fr 1fr;

    margin: 10px 0;
    padding: 10px 15px;

    background-color: white;
    border-radius: 10px;

    transition: all 0.2s ease;
  }

  input {
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid #999;
    appearance: none;
    cursor: pointer;

    &:checked {
      background: #9f8473;
      border: none;
    }
    &:checked::before {
      content: '✔︎';
      color: white;
      font-size: 15px;
      position: absolute;
      right: 89.4%;
    }
  }

  button {
    border: none;
    background-color: white;
    color: #9f8473;
    font-size: 20px;
    cursor: pointer;

    &:hover {
      color: black;
      transform: scale(1.1);
    }
  }

  .checked {
    text-decoration: line-through #939496;
    color: #939496;
  }
`;

// components
const TodoList = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]); // 투두를 가져오는데 필요한 상태
  const [isLoading, setIsLoading] = useState(true);

  // 투두 가져오기
  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:3001/todos')
        .then((res) => {
          if (!res.ok) {
            throw Error('could not fetch the data for that resource');
          }
          return res.json();
        })
        .then((data) => {
          setIsLoading(false);
          setTodos(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);
  }, []);

  // 투두 삭제하기
  const handleDelete = (id) => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(() => {
        navigate('/');
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });

    console.log('delete!');
  };

  // 투두 완료했니 토글 만들기
  const handleIsComplete = (id, isCompleted) => {
    let patchData = { isCompleted: !isCompleted };

    fetch(`http://localhost:3001/todos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(patchData),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });

    console.log('modify!');
  };

  return (
    <TodoListStyle>
      {isLoading && <Loading />}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              onChange={() => handleIsComplete(todo.id, todo.isCompleted)}
              checked={todo.isCompleted}
            />
            <div className={todo.isCompleted ? 'checked' : null}>
              {todo.description}
            </div>
            <button onClick={() => handleDelete(todo.id, todo.isCompleted)}>
              <i className="fa-solid fa-trash fa-lg"></i>
            </button>
          </li>
        ))}
      </ul>
    </TodoListStyle>
  );
};

export default TodoList;
