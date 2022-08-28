import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import BasicForm from './BasicForm';
import axios from 'axios';
import { useState } from 'react' 
import DaumPostcode from 'react-daum-postcode';
import Modal from "react-modal";
import { useLocation, useNavigate  } from 'react-router-dom';

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

const Address = styled.input`
    width: 92.5%;
    height: 50px;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding-left: 23px;

    font-size: 20px;
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

const Form = styled.form`
`;


function Starting2() {
    const [roadAddress, setRoadAddress] = useState("");
    const [isOpen, setIsOpen] = useState(false); //추가

    const navigate = useNavigate();
    const location = useLocation();
    const start = location.state.start;

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

    //user name
    const [name, setName] = useState("");
    const onChangeName = ({target: {value}}) => {
        setName(value)
        console.log(name);
    }

    const onSubmit = (e) =>  {   
        e.preventDefault();
        const getData = () => {
            console.log('starting1.js/getData()')
            axios
                .post('http://127.0.0.1:8000/wemeet-2/', {
                    name: name,
                    startAddress: roadAddress,
                    endAddress: start
                })
                .then(navigate('/starting3',{
                    state: {
                      start: start
                    }}))
                .catch((err) => console.log(err));
        };
        getData();
    };

    const MoveOn = () => {
        window.location.href="/starting3"
    }


    return (
        <>
        <GlobalStyle />
        <Container>
            <BasicForm />
            <TitleBox>
                <Title>출발지를 <br></br>입력해주세요</Title>
            </TitleBox>
            <Subheading>두 번째 친구의 주소를 입력해주세요</Subheading>
            <Form onSubmit={onSubmit}>
            <Box>
                <Name onChange={onChangeName} placeholder='이름 입력'></Name>
                <Address value={roadAddress} readOnly placeholder='주소 입력' onClick={toggle} />
                <Modal isOpen={isOpen} ariaHideApp={false} style={customStyles}>
                    <button onClick={toggle}>x</button>
                <DaumPostcode onComplete={completeHandler1} height="100%" />
            </Modal>    
            </Box>

            <ConfirmBox>
                <ConfirmBtn
             onClick={onSubmit
                }>다음!</ConfirmBtn>
            </ConfirmBox>
            </Form> 
        </Container>
        </>
    )
}

export default Starting2;
