import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import BasicForm from './BasicForm';
import { useState, useNavigate } from 'react' 
import DaumPostcode from "react-daum-postcode";

import Modal from "react-modal"; // 추가
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    padding-top: 40px;
    padding-left: 20px;
`;

const TitleBox = styled.div`
    width: 100%;
    height: 100px;
    margin-bottom: 60px;
`;

const Title = styled.div`
    width: 260px;
    height: 100px;

    font-weight: bold;
    font-size: 42px;
    line-height: 120%;
`;

const Box = styled.form`
    width: 90%;
    height: 112px;
    margin-bottom: 20px;

`;

const Subheading = styled.div`
    width: 100%;
    height: 24px;
    margin-bottom: 26px;
    padding-left: 1px;

    font-size: 20px;
    font-weight: bold;
`

const Name = styled.input`
    width: 92.5%;
    height: 46px;
    border: 1px solid black;
    padding-left: 23px;
    border-radius: 5px;
    margin-bottom: 11px;
    
    font-size: 20px;
`;

const Address = styled.button`
    width: 100%;
    height: 50px;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding-left: 23px;

    div{
        font-size: 20px;
        margin-right: 190px;
        color: gray;
    }

    span{
        font-size: 30px;
    }
`;

const ConfirmBox = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ConfirmBtn = styled.button`
    width: 100%;
    height: 52px;
    background-color: #3C7EFF;
    border-radius: 5px;
    border: none;
    margin-top: 23px;

    color: white;
    font-size: 20px;
`;



function Starting() {
    const [roadAddress, setRoadAddress] = useState("");
    const [isOpen, setIsOpen] = useState(false); //추가

    const completeHandler1 = (data) =>{
        setRoadAddress(data.roadAddress);
        setIsOpen(false); //추가
    }
    const navigate = useNavigate();


    // Modal 스타일
    const customStyles = {
        overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
        },
        content: {
            left: "0",
            margin: "auto",
            width: "500px",
            height: "400px",
            padding: "0",
            overflow: "hidden",
        },
    };

    const toggle = () =>{
        setIsOpen(!isOpen);
    }

    

    return (
        <>
        <GlobalStyle />
        <Container>
            <BasicForm />
            <TitleBox>
                <Title>약속장소를 <br></br>입력해주세요</Title>
            </TitleBox>
            
            <input value={roadAddress} readOnly placeholder="도로명 주소" onClick={toggle}/>
            <Modal isOpen={isOpen} ariaHideApp={false} style={customStyles}>
                <button onClick={toggle}>x</button>
                <DaumPostcode onComplete={completeHandler1} height="100%" />
            </Modal>    

            <br></br>

            <Link to="/friend1" onClick={()=>{
                
            }}>다음</Link>
        </Container>
        </>
    )
}

export default Starting;
