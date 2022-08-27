import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import BasicForm from './BasicForm';

const Container = styled.div`
    width: 100%;
    padding-top: 40px;
    padding-left: 20px;
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

const AddressBtn = styled.button`
    width: 90%;
    height: 60px;
    border: 1px solid black;
    border-radius: 20px;
    background-color: white;
`;

const SearchBtn = styled.div`
    width: 30px;
    height: 30px;
    margin-left: 296px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    span{
        font-size: 30px;
    }
`;




function Destination() {

    const onClick = () => {
        window.location.href="https://www.naver.com/"
    }

    return (
        <>
        <GlobalStyle />
        <Container>
            <BasicForm />
            <TitleBox>
                <Title>약속 장소를 입력하세요</Title>
            </TitleBox>
            <AddressBtn onClick={onClick}>
                <SearchBtn><span class="material-symbols-outlined">search</span></SearchBtn>
            </AddressBtn>

        
        </Container>
        </>
    )
}

export default Destination;
