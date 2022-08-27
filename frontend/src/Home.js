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

const StyledButton = styled.button`
  padding: 20px 100px;
  border-radius: 8px;
  font-size: 1rem;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  display: flex;
  margin-top: 210px;
  font-weight: bold;
  background-color: #3C7EFF;
  color: white;
`;

function Home() {
    return (
        <>
        <GlobalStyle />
        <Container>
                <Bigtitle>
                  오.보.맞
                </Bigtitle>
                <Smalltitle>
                  우리 오늘 보는거 맞지
                </Smalltitle>               
        </Container>
        <StyledButton>
          시작!
        </StyledButton> 
        </>
    )
}
export default Home;
