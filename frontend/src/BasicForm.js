import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { Helmet, HelmetProvider } from "react-helmet-async";

const BackBox = styled.div`
    width: 100%;
    height: 50px;
    margin-bottom: 50px;
`;

const BackButton = styled.button`
    width: 24px;
    height: 24px;
    background-color: white;
    border: none;
`;

function BasicForm() {
    return (
        <>
        <GlobalStyle />
        <HelmetProvider>
            <Helmet>
            <link rel="stylesheet" 
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            </Helmet>
        </HelmetProvider>
            <BackBox>
                <BackButton> 
                    <span class="material-symbols-outlined">arrow_back_ios_new</span>
                </BackButton>
            </BackBox>
        </>
    )
}

export default BasicForm;
