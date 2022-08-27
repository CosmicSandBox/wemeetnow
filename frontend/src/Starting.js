import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import BasicForm from './BasicForm';
import { useState } from 'react'
import { axios } from 'axios';

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

const Form = styled.form`
`;


function Starting() {

    const onClick = () => {
        window.location.href="https://www.naver.com/"
    }

    //user name
    const [name, setName] = useState("");
    const onChangeName = ({target: {value}}) => {
        setName(value)
        console.log(name);
    }

    const onSubmit = (e) =>  {   
        e.preventDefault();
        const getData = async () => {
            await axios
                .post('http://localhost:8000/wemeet/', {
                    name: name,
                    startAddress: name,
                    endAddress: name
                })
                .then((response) => {
                    console.log(response.data)
                })
                .catch((err) => console.log(err));
        };
        getData();
    };

    

    return (
        <>
        <GlobalStyle />
        <Container>
            <BasicForm />
            <TitleBox>
                <Title>출발지를 <br></br>추가해주세요</Title>
            </TitleBox>
            <Subheading>첫 번째 친구의 주소를 입력해주세요</Subheading>
            <Form onSubmit={onSubmit}>
            <Box>
                <Name onChange={onChangeName} placeholder='이름 입력'></Name>
                <Address onClick={{onClick}}>
                        <div>주소 입력</div>
                        <span class="material-symbols-outlined">search</span>
                </Address>
            </Box>

            <ConfirmBox>
                <ConfirmBtn>시간 계산하기!</ConfirmBtn>
            </ConfirmBox>
            </Form>
        </Container>
        </>
    )
}

export default Starting;
