import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import BasicForm from './BasicForm';
import { useState } from 'react';
import Modal from "react-modal";
import DaumPostcode from 'react-daum-postcode';
import {useNavigate} from 'react-router-dom';

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
    width: 280px;
    height: 100px;

    font-weight: bold;
    font-size: 42px;
    line-height: 120%;
`;

const Form = styled.form`
`;

const Address = styled.input`
    width: 92%;
    height: 60px;
    border: 1px solid black;
    border-radius: 20px;
    background-color: white;
    padding-left: 23px;

    font-size: 20px;
`;

const Box = styled.form`
    width: 90%;
    height: 80px;
    margin-bottom: 20px;

`;

const Next = styled.button`
    width: 90%;
    height: 60px;
    background-color: #3C7EFF;
    border: none;
    border-radius: 20px;

    font-size: 20px;
    font-weight: bold;
    color: white;
`;




function Destination() {

    const MoveOn = () => {
        window.location.href="/starting"
    }

    const [roadAddress, setRoadAddress] = useState("");
    const [isOpen, setIsOpen] = useState(false); //추가
    console.log(roadAddress)
    const navigate = useNavigate();

    const completeHandler1 = (data) =>{
        setRoadAddress(data.roadAddress);
        setIsOpen(false); //추가
    }
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
                <Title>약속 장소를 입력하세요</Title>
            </TitleBox>
            <Form>
            <Box>
                <Address value={roadAddress} readOnly placeholder='주소 입력' onClick={toggle} />
                <Modal isOpen={isOpen} ariaHideApp={false} style={customStyles}>
                    <button onClick={toggle}>x</button>
                <DaumPostcode onComplete={completeHandler1} height="100%" />
            </Modal>    
            </Box>
            </Form>
            
            <Next onClick={()=>{
                    navigate('/starting',{
                        state: {
                          start: roadAddress
                        }})
                }}>완료</Next>
        </Container>
        </>
    )
}

export default Destination;
