import React from 'react';
import styled from "styled-components";

const ContainerWithColumn = styled.div`
    display: flex;
    max-width: 1200px;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 180px;
    justify-content: space-between;
`;

const Title = styled.div`
    width: 100%;
    font-family: 'Gasoek One';
    font-size: 60px;
    text-align: left;
    letter-spacing: 2px;
    color: #326a4f;
`;

const Description = styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    letter-spacing: -0.24px;
    text-align: left;
    // margin-left: 80px;
    color: #7d7d7d;
`;

const Imgbox = styled.img`
    max-width: 197px;
    min-height: 209px;
    height: 100%;
    width: 100%;
    margin-left: 50px;
`

function BookList({book}) {
    return (
        <ContainerWithColumn>
            <div>
                <Title>{book.bookId}.{book.bookTitle}</Title>
                <Description>{book.count}명이 좋아해요</Description>
            </div>
            <Imgbox src={book.bookImageUrl}/>
        </ContainerWithColumn>
    );
}
  
export default BookList;