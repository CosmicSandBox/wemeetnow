import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';

const Container = styled.div`
    width: 100%;
    height: 844px;
    padding-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Box = styled.div`
    width: 100%;
    height: 202px;
`;

function Home() {
    return (
        <>
        <GlobalStyle />
        <Container>
            <Box>
            </Box>
        </Container>



        </>
    )
}

export default Home;
