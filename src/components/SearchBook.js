import React from 'react';
import styled from "styled-components";

const ContainerWithColumn = styled.div`
    display: flex;
    max-width: 1200px;
    width: 100%;
    padding-top: 2px;
    padding-bottom: 2px;
    cursor: pointer;

    transition: background-color 0.3s;

    &:hover {
        background-color: rgb(201, 210, 211);
    }
`;

const Title = styled.div`
    width: 100%;
    font-family: 'Noto Sans KR';
    font-weight: 700;
    font-size: 24px;
    text-align: left;
    text-align: left;
    color: #326a4f;
`;

const Description = styled.div`
    width: 100%;
    font-family: 'Noto Sans KR';
    font-weight: 500;
    font-size: 20px;
    text-align: left;
    text-align: left;
    color: #326a4f;
`;

const Imgbox = styled.img`
    max-width: 93px;
    min-height: 99px;
    height: 100%;
    width: 100%;
    margin-top: 9px;
    margin-left: 10px;
    margin-right: 20px;
    margin-bottom: 9px;
`

function SelectBook({book, handleSelect}) {
    return (
        <>
            <ContainerWithColumn onClick={() => handleSelect(book)}>
                <Imgbox src={book.image}/>
                <div>
                    <Title>{book.title}</Title>
                    <Description>저자 {book.author}</Description>
                    <Description>출판 {book.publisher}</Description>
                </div>
            </ContainerWithColumn>
        </>
    );
}
  
export default SelectBook;