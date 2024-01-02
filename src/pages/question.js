import React, { useState, useEffect } from 'react';
import api from '../services/api'
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";
import styled from "styled-components";

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
    margin-bottom: 200px;
`;

function Question() {
    const [count, setCount] = useState(0);
    const [question, setQuestion] = useState('');

    useEffect(() => {
        const fetchQuestion = async () => {
            try {
                const data = await api.getOneQuestion(count + 1);
                setQuestion(data);
            }
            catch (error) {
                console.error('Error fetching data: ', error);
            }
        }

        fetchQuestion();
    }, [count]);

    if (!question) {
        return null;
    }

    return (
        <Container>            
            <Checkbox count={count} />
            <Title>0{count + 1}</Title>
            <Description>{question.questionContent}</Description>
            <Button num={1} count={count} setCount={setCount} content={question.answers[0].content}/>
            <Button num={2} count={count} setCount={setCount} content={question.answers[1].content}/>
        </Container>
    );
}
  
export default Question;