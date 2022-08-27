import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import BasicForm from './BasicForm';
import { useState, useEffect} from 'react'

const Container = styled.div`
    width: 100%;
    padding-top: 40px;
    padding-left: 30px;
`;

const TitleBox = styled.div`
    width: 100%;
    height: 100px;
    margin-bottom: 40px;
`;

const Title = styled.div`
    width: 300px;
    height: 100px;

    font-weight: bold;
    font-size: 42px;
    line-height: 120%;
`;

const MidBox = styled.div`
    padding-top: 25px;
    padding-bottom: 1px;
    width: 85%;
    border-radius: 20px;
    box-shadow: 0px 0px 10px 1px lightgray;  
    margin-bottom: 30px;  
`;

const ResultBox = styled.div`
    margin: auto;
    width: 80%;
    height: 76px;
    margin-bottom: 30px;
    border-radius: 20px;
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
    padding-left: 10px;
`;

const Name = styled.div`
    width: 35%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;
`;

const Time = styled.div`
    width: 65%;
    height: 100%;
    display:flex;
    justify-content: flex-end;
    align-items: center;

    font-size: 42px;
    font-weight: bold;
`;

const SuggestBox = styled.div`
    width: 85%;
    height: 151px;
    border-radius: 20px;
    background-color: #3C7EFF;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SuggestText = styled.div`
    width: 80%;
    height: 80%;

    font-size: 20px;
    font-weight: bold;

`




function Result() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([]);

    const getTime = async() => {
        const json = await (    
            await fetch(
                `http://localhost:8000/finalResult`
            )
        ).json();
        setUser(json.data)
        setLoading(false);
    };
    useEffect(()=>{
        getTime()
    })



    return (
        <>
        <GlobalStyle />
        {loading ? (<h1>Loading...</h1>
            ) : (
        <Container>
            <BasicForm />
            <TitleBox>
                <Title>약속 장소까지 걸리는 시간</Title>
            </TitleBox>
            <MidBox>
                {user.map((item, index)=>
                <ResultBox key={index}>
                    <Name>{item.name}님,</Name>
                    <Time>{item.finalTime}</Time>
                </ResultBox>
                )}
            </MidBox>

            <SuggestBox>
                <SuggestText>얏호</SuggestText>
            </SuggestBox>

        </Container>
        )}
        </>
    )
}

export default Result;
