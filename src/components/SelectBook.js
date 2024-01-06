import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const ContainerWithColumn = styled.div`
    display: flex;
    max-width: 1200px;
    width: 100%;
    margin-top: 2px;
    margin-bottom: 2px;
    position: relative;
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

const DescriptionContainer = styled.div`
    margin-right: 20px;
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
    margin-right: 25px;
`

const DeleteBox = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    z-index: 1;
`

function SelectBook({index, book, handleDelete}) {
    return (
        <ContainerWithColumn>
            <Imgbox src={book.image}/>
            <DescriptionContainer>
                <Title>{book.title}</Title>
                <Description>저자 {book.author}</Description>
                <Description>출판 {book.publisher}</Description>
            </DescriptionContainer>
            <DeleteBox onClick={() => handleDelete(index)}><FontAwesomeIcon icon={faXmark}  style={{ color: '#326a4f', fontSize: '40px' }}/></DeleteBox>
        </ContainerWithColumn>
    );
}
  
export default SelectBook;