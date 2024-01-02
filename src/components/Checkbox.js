import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 450px;
    width: 100%;
`;

const StyledCheckbox = styled.span`
    position: relative;
    display: inline-block;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    transition: background-color 0.3s ease;
    background-color: ${({ checked }) => (checked ? '#326a4f' : '#84c3a5')};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CheckboxGroup = ({ count }) => {
    return (
        <Container>
            {Array.from({ length: 5 }, (_, index) => (
                <StyledCheckbox
                    key={index}
                    checked={index === count? true: false}
                >
                    <img src='./img/check.png'></img>
                </StyledCheckbox>
            ))}
        </Container>
    );
};

export default CheckboxGroup;