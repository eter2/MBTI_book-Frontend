import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 592px;
    width: 100%;
    margin-bottom: 30px;
    cursor: pointer;
`;

const StyledSpan = styled.span`
    position: relative;
    display: inline-block;
    width: 100%;
    height: 151px;
    border-radius: 2%;
    transition: background-color 0.3s ease;
    background-color: ${({ checked }) => (checked ? '#fdfffc' : '#ffffff')};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
`;

const Description = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  letter-spacing: -0.41px;
  text-align: center;
  color: #6f6f70;
  white-space:pre-wrap;
`;

const Button = ({ num, count, setCount, content }) => {
    const navigate = useNavigate();
  
    const handleRouter = () => {
      navigate('/sendbook');
    }

    const handleClick = (num) => {
        let key = sessionStorage.getItem('key');
        if (count !== 0) {
            key += + `${num}`;
            sessionStorage.setItem('key', key);
        }
        else {
            sessionStorage.setItem('key', `${num}`);
        }

        setCount(count => count + 1);

        if (count === 3) {
            handleRouter();
        }
    }

    return (
        <Container onClick={() => handleClick(num)}>
            <StyledSpan
                checked={num === 1? true: false}
            >
                <Description>{content}</Description>
            </StyledSpan>
        </Container>
    );
};

export default Button;