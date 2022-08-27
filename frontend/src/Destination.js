import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import BasicForm from './BasicForm';

const Container = styled.div`
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 40px;
`;

const TitleBox = styled.div`
    width: 100%;
    height: 100px;
`;

const Title = styled.div`
    width: 300px;
    height: 100px;

    font-weight: bold;
    font-size: 42px;
    line-height: 120%;
`;



function Destination() {
    return (
        <>
        <GlobalStyle />
        <Container>
            <BasicForm />
            <TitleBox>
                <Title>약속 장소까지 걸리는 시간</Title>
            </TitleBox>

        
        </Container>
        </>
    )
}

export default Destination;
