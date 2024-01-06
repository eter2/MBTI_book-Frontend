import React, { useState, useEffect }  from 'react';
import { useParams } from "react-router-dom";
import api from '../services/api'
import styled from "styled-components";
import ResultBook from '../components/ResultBook';
import BookList from '../components/BookList';
import Share from '../components/Share';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background: #ffffff;
    margin-top: 80px;
`;

const Subtitle = styled.div`
    max-width: 1200px;
    width: 100%;
    font-family: 'Gasoek One';
    font-size: 60px;
    text-align: left;
    letter-spacing: 2px;
    color: #326a4f;
    margin-top: 100px;
    margin-bottom: 80px;
`;

function Result() {
    const [result, setResult] = useState();
    const url = window.location.href;
    const params = useParams();

    useEffect(() => {
        const fetchResult = async () => {
            try {
                if (!params.key) {
                    return null;
                }

                const data = await api.getResult(params.key);
                setResult(data);
            }
            catch (error) {
                console.error('Error fetching data: ', error);
            }
        }

        fetchResult();
    }, []);

    if (!result) {
        return null;
    }

    return (
      <Container>
        <ResultBook name={result.bookmarkNickname} imgUrl={result.bookmarkImageUrl} description={result.bookmarkDescription}/>

        <Subtitle>
            {result.bookmarkNickname} 유형이<br />
            가장 좋아하는 책 Best10
        </Subtitle>
        
        {result.books.map((book, index) => (
            <BookList key={index} index={index + 1} book={book} />
        ))}

        <Share url={url} />
      </Container>
    );
}
  
export default Result;