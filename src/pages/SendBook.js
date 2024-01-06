import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import api from '../services/api'
import Checkbox from "../components/Checkbox";
import SelectBook from "../components/SelectBook";
import SearchBook from "../components/SearchBook";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

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
    position: relative;
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

    &:focus {
       outline: none;
    }
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
    max-width: 117px;
    min-height: 34px;
    border-radius: 10px;
    border: 0;
    background-color: #fdfffc;
    color: #6f6f70;
    font-weight: 500;
    font-size: 16px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
`;
const SubmitButton = styled.button`
    font-family: 'Noto Sans KR';
    width: 100%;
    max-width: 234px;
    min-height: 51px;
    border-radius: 10px;
    border: 0;
    background-color: #fdfffc;
    color: #326a4f;
    font-weight: 500;
    font-size: 26px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 620px;
    position: absolute;
    display: flex;
    top: 100%;
    left: 7px;
    width: 98%;
    max-width: 817px;
    flex-direction: column;
    background: rgba(201, 221, 211, 0.96);
    z-index: 9999;
    margin-top: -20px;
    
    font-family: 'Noto Sans KR';
    font-size: 28px;
    font-weight: 400;
    color: #326a4f;
`;

const SearchResultContainer = styled.div`
    width: 100%;
    max-width: 817px;
    margin: 20px;
`;

const SelectEmptyContainer = styled.div`
    width: 100%;
    max-width: 817px;
    min-height: 135px;
    display: flex;
    flex-direction: column;
`;

const Separator = styled.hr`
    width: 100%;
    max-width: 817px;
    border: solid 1px rgba(205, 196, 196, 1);
`;

function SendBook() {
    const [keyword, setKeyword] = useState("");
    const [bookList, setBookList] = useState([]);
    const [selectBooks, setSelectBooks] = useState([]);

    const handleSearch = async () => {
        try {
            if (!keyword) {
                setBookList([]);
                return null;
            }

            const data = await api.getBookSearch(keyword);
            setBookList(data);
        }
        catch (error) {
            console.error('Error fetching data: ', error);
        }
    }

    useEffect(() => {
        handleSearch();
    }, [keyword]);

    const handleSelect = (book) => {
        if (selectBooks.length === 3) {
            window.alert("최대 입력 권수(3권)를 초과했습니다.");
            setKeyword("");
            return;
        }

        setSelectBooks([...selectBooks, book]);
        setKeyword("");
    }
    
    const handleDelete = (index) => {
        const updatedBooks = [...selectBooks];
        updatedBooks.splice(index, 1);
    
        setSelectBooks(updatedBooks);
    }

    const navigate = useNavigate();

    const handleClick = () => {
        const key = sessionStorage.getItem('key');
        navigate(`/result/${key}`);
    }
    
    const handleSubmit = async () => {
        if (selectBooks.length === 0) {
            window.alert("입력한 책이 없습니다.");
            return;
        }

        let transformedData = [];
        const key = sessionStorage.getItem('key');

        selectBooks.forEach((book) => {
            transformedData.push({
                title: book.title,
                pageUrl: book.link,
                imageUrl: book.image,
                author: book.author,
                isbn: book.isbn,
                description: book.description
            });
        });
    
        try {
            await api.postBookSearch(key, transformedData);
        }
        catch (error) {
            console.error('Error fetching data: ', error);
        }
        
        navigate(`/result/${key}`);
    }

    return (
        <Container>            
            <Checkbox count={4}/>
            <Description>내가 평소 좋아하는 책은?</Description>
            <SubDescription>3권까지 입력 가능</SubDescription>
            <InputContainer>
                <Input placeholder='입력해주세요' value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
                <ButtonContainer>
                    <CustomButton onClick={handleSearch}><FontAwesomeIcon icon={faArrowUp}  style={{ color: 'white', fontSize: '40px' }}/></CustomButton>
                </ButtonContainer>
            </InputContainer>

            <InputContainer>
                <SearchContainer>
                    {bookList !== undefined && bookList.length !== 0 &&<SearchResultContainer><FontAwesomeIcon icon={faMagnifyingGlass}  style={{ color: '#326a4f', fontSize: '40px' }}/> {keyword}  검색 결과</SearchResultContainer>
                    }
                    {bookList !== undefined && bookList.length !== 0 && bookList.items.map((book, index) => (
                        <SearchBook key={index} book={book} handleSelect={handleSelect}></SearchBook>
                    ))}
                </SearchContainer>
            </InputContainer>

            <ButtonContainer>
                <Button onClick={handleClick}>건너뛰기</Button>
            </ButtonContainer>

            <Separator />

            {
                Array.from({ length: 3 }).map((_, index) => {
                    const book = selectBooks[index];
                    if (selectBooks.length === 0 || book === undefined) {
                        return (
                            <SelectEmptyContainer key={index}>
                                <SelectEmptyContainer />
                                <Separator />
                            </SelectEmptyContainer>
                        );
                    } else {
                        return (
                            <SelectEmptyContainer key={index}>
                                <SelectBook index={index} book={book} handleDelete={handleDelete} />
                                <Separator />
                            </SelectEmptyContainer>
                        );
                    }
                })
            }

            <ButtonContainer onClick={handleSubmit}>
                <SubmitButton>입력완료</SubmitButton>
            </ButtonContainer>

        </Container>
    );
}
  
export default SendBook;