import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import api from '../services/api'
import Checkbox from "../components/Checkbox";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  background: #ffffff;
`;

const Title = styled.div`
  font-family: 'Gasoek One';
  font-size: 64px;
  text-align: center;
  letter-spacing: 3px;
  color: #326a4f;
  margin-top: 150px;
`;

const Description = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  letter-spacing: -2px;
  text-align: center;
  color: #6f6f70;
  margin-top: 70px;
  margin-bottom: 50px;
`;

const Imgbox = styled.img`
  margin-bottom: 50px;
`

const SubDescription = styled.div`
    width: 99%;
    max-width: 817px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    letter-spacing: -0.41px;
    text-align: right;
    color: #9b9b9b;
    margin-bottom: 20px;
`;

const InputContainer = styled.div`
    width: 100%;
    max-width: 817px;
`;

const Input = styled.input`
    font-family: 'Noto Sans KR';
    width: calc(100% - 20px - 80px);
    min-height: 93px;
    border-radius: 10px;
    border: 0;
    background-color: #fdfffc;
    color: #9b9b9b;
    font-size: 26px;
    text-align: left;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    padding: 0px 80px 0px 20px;
    margin-bottom: 20px;
`;

const CustomButton = styled.button`
    width: 58px;
    height: 58px;
    border-radius: 50%;
    border: 0;
    background-color: #326a4f;
    justify-content: center;
    align-items: center;
    margin-top: -95px;
    margin-right: 5px;
    cursor: pointer;
`;

const ButtonContainer = styled.div`
    width: 99%;
    max-width: 817px;
    display: flex;
    justify-content: flex-end;
`;

const Button = styled.button`
    font-family: 'Noto Sans KR';
    width: 100%;
    max-width: 151px;
    max-height: 51px;
    border-radius: 10px;
    border: 0;
    background-color: #fdfffc;
    color: #6f6f70;
    font-weight: 500;
    font-size: 27px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    margin-top: 10px;
    margin-bottom: 143px;
    cursor: pointer;
`;

function SendBook() {
    const navigate = useNavigate();

    const handleClick = () => {
        const key = sessionStorage.getItem('key');
        navigate(`/result/${key}`);
    }

    return (
        <Container>            
            <Checkbox count={4}/>
            <Title>05</Title>
            <Description>내가 평소 좋아하는 책은?</Description>
            <Imgbox src='./img/book.png' />
            <SubDescription>3권까지 입력 가능</SubDescription>
            <InputContainer>
                <Input placeholder='입력해주세요' />
                <ButtonContainer>
                    <CustomButton><FontAwesomeIcon icon={faArrowUp}  style={{ color: 'white', fontSize: '40px' }}/></CustomButton>
                </ButtonContainer>
            </InputContainer>
            <ButtonContainer>
                <Button onClick={handleClick}>건너뛰기</Button>
            </ButtonContainer>
        </Container>
    );
}
  
export default SendBook;