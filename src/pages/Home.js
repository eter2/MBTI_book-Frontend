import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
`;

const Title = styled.div`
  font-family: 'Gasoek One';
  font-size: 70px;
  line-height: 74px;
  text-align: center;
  letter-spacing: 2px;
  color: #254e3a;
`;

const Subtitle = styled.div`
  font-family: 'Noto Sans KR';
  font-size: 40px;
  font-weight: 900;
  text-align: center;
  letter-spacing: 0.41px;
  color: #000000;
  margin-top: 20px;
`;

const Imgbox = styled.img`
  margin-top: 20px;
  margin-bottom: 100px;
`

const Description = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  color: #6f6f70;
  margin-top: 20px;
`;

const Button = styled.button`
  font-family: 'Gasoek One';
  width: 90%;
  max-width: 499px;
  min-height: 78px;
  border-radius: 20px;
  border: 0;
  background-color: #326a4f;
  color: white;
  font-size: 26px;
  cursor: pointer;
`;

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('question');
  }

  return (
    <Container>
      <Title>나는 무슨 책갈피일까?</Title>
      <Subtitle>30초로 끝내는 책 취향 TEST</Subtitle>
      <Description>책 취향 테스트를 통해<br/>내 유형이 좋아하는 책 TOP10을 알아보자</Description>

      <Imgbox src="./img/bookmark.png" />
      <Button onClick={handleClick}>START</Button>
    </Container>
  );
}

export default Home;