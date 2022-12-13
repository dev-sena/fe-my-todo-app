import styled from "styled-components";

// styled-components
const DateStyle = styled.div`
  font-size: 30px;
  font-family: "Gowun Dodum", sans-serif;

  display: flex;
  justify-content: center;

  margin: 25px 0;
`;

// components
const GetDate = () => {
  let newDate = new Date();
  let year = newDate.getFullYear();
  let month = newDate.getMonth() + 1;
  let date = newDate.getDate();
  let day = newDate.getDay();

  function getDay(day) {
    if (day === 1) return "월";
    if (day === 2) return "화";
    if (day === 3) return "수";
    if (day === 4) return "목";
    if (day === 5) return "금";
    if (day === 6) return "토";
    if (day === 7) return "일";
  }

  return (
    <DateStyle>
      {year}년 {month}월 {date}일 {getDay(day)}요일
    </DateStyle>
  );
};

export default GetDate;
