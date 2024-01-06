import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faShareNodes } from '@fortawesome/free-solid-svg-icons'

const ContainerWithColumn = styled.div`
    display: flex;
    margin-top: 50px;
    margin-bottom: 80px;
    justify-content: space-around;
`;

const ContainerWithFlex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 500px;
    
    @media screen and (max-width: 768px) {
        width: 300px;
    }
`;

const Description = styled.div`
    font-family: 'Noto Sans KR';
    color: #326a4f;
    font-weight: 700;
    font-size: 43px;
    margin-top: 50px;
    text-align: center;
`;  

function Share({url}) {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate(`/`);
    }

    const saveClipboard = (url) => {
        navigator.clipboard.writeText(url)
            .then(() => {
                window.alert('공유 링크 복사 성공');
            })
            .catch((error) => {
                console.error('Failed to copy text to clipboard:', error);
            });
    }

    return (
        <div>
            <ContainerWithColumn>
                <ContainerWithFlex onClick={handleHome}>
                    <FontAwesomeIcon icon={faHouse} style={{ fontSize: '82px' }}/>
                    <Description>다시하기</Description>
                </ContainerWithFlex>
                
                <ContainerWithFlex onClick={() => saveClipboard(url)}>
                    <FontAwesomeIcon icon={faShareNodes} style={{ fontSize: '82px' }}/>
                    <Description>내 책갈피 공유하기</Description>
                </ContainerWithFlex>
            </ContainerWithColumn>
        </div>
    );
}
  
export default Share;