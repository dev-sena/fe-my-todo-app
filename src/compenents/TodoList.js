import styled from "styled-components";
import { useState, useEffect } from "react";

// styled-components
const TodoListStyle = styled.ul`
    font-family: "Gowun Dodum", sans-serif;
    font-size: 28px;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px;

    li {
        width: 93%;
        display: grid;
        grid-template-columns: 1fr 12fr 1fr;

        margin: 10px 0;
        padding: 15px 20px;

        background-color: white;
        border-radius: 10px;
    }

    input {
        margin-right: 10px;
        cursor: pointer;

        width: 18px;
        height: 18px;
    }
`;

// components
const TodoList = () => {
    // 투두를 가져오는데 필요한 상태
    const [todos, setTodos] = useState([]);

    // 투두 가져오기
    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:3001/todos")
                .then((res) => {
                    if (!res.ok) {
                        throw Error("could not fetch the data for that resource");
                    }
                    return res.json();
                })
                .then((data) => {
                    setTodos(data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }, 1000);
    }, []);

    return (
        <TodoListStyle>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <input type="checkbox" />
                    <div>{todo.description}</div>
                    {/* <button onClick={() => handlDelete(`${todo.id}`)}>X</button> */}
                </li>
            ))}
        </TodoListStyle>
    );
};

export default TodoList;
