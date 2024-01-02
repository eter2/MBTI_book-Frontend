import React from 'react';
import styled from "styled-components";
import ShareKakao from './ShareKakao';
import { FacebookShareButton, FacebookIcon } from "react-share";

const Title = styled.div`
    font-family: 'Gasoek One';
    font-size: 60px;
    text-align: center;
    letter-spacing: 2px;
    color: #326a4f;
`;

const ContainerWithColumn = styled.div`
    display: flex;
    max-width: 1200px;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 80px;
    justify-content: space-between;
`;

function Share({url, imgUrl}) {
    return (
        <div>
            <Title>결과 공유하기</Title>
            <ContainerWithColumn>
                <ShareKakao url={url} imgUrl={imgUrl}/>
                {/* <div>인스타그램</div> */}
                <FacebookShareButton url={url}>
                <FacebookIcon size={68} round={false} borderRadius={15} />
                </FacebookShareButton>
            </ContainerWithColumn>
        </div>
    );
}
  
export default Share;