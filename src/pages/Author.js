import styled from 'styled-components';

// style-components
const AuthorStyle = styled.div`
  height: 700px;

  /* 요소 전체 중앙 정렬 */
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);

  /* 요소 각각 가운데 정렬 */
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: 'Gowun Dodum', sans-serif;
  font-size: 30px;
  font-weight: 700;

  .author-profile {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: #c8bfe7;
    margin-bottom: 50px;
  }

  a {
    &:hover {
      color: #9f8473;
    }
  }

  div {
    margin-bottom: 20px;
  }
`;

// components
const Author = () => {
  return (
    <AuthorStyle>
      <div className="author-profile"></div>
      <div>만든 이: sena</div>
      <div>
        <a href="https://github.com/dev-sena" target="__blank">
          github: dev-sena
        </a>
      </div>
    </AuthorStyle>
  );
};

export default Author;
