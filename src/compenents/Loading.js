import styled from 'styled-components';

// styled-components
const LoadingStyle = styled.div`
  font-size: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 500px;
  height: 800px;
`;

const Loading = () => {
  return <LoadingStyle>Loading... 😢</LoadingStyle>;
};

export default Loading;
