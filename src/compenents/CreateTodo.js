import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

// styled-components
const CreateTodoStyle = styled.div`
  display: flex;
  justify-content: center;

  input {
    width: 600px;
    padding: 10px;
    font-size: 20px;

    border: none;
    border-radius: 10px;
  }

  button {
    margin-left: 20px;
    border: none;
    padding: 10px 13px;

    background-color: white;
    border-radius: 50%;

    cursor: pointer;

    transition: all 0.4s ease;
    &:hover {
      background-color: #9f8473;
      color: white;
    }
  }
`;

// components
const CreateTodo = () => {
  // 투두를 생성하기 위한 상태
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  // 엔터키를 감지하는 함수
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleCreate();
    }
  };

  // 투두를 생성버튼을 누르면 실행할 함수
  const handleCreate = (e) => {
    e.preventDefault();

    // 요청을 보낼 데이터
    const todo = { description, isCompleted: false };

    fetch('http://localhost:3001/todos', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',
      },
      body: JSON.stringify(todo),
    })
      .then(() => {
        navigate('/');
        window.location.reload(); // 새로고침해야 새로 추가한 글이 보임
      })
      .catch((err) => console.log(err));
  };

  return (
    <CreateTodoStyle>
      <form>
        <input
          type="text"
          placeholder="할 일을 적어주세요!"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onKeyDown={handleEnter}
          required
        />
        <button onClick={handleCreate}>
          <i className="fa-solid fa-plus fa-2x"></i>
        </button>
      </form>
    </CreateTodoStyle>
  );
};

export default CreateTodo;
