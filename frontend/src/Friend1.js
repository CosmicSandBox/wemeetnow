import React,{useState} from "react";
import { useParams,useNavigate } from 'react-router-dom';
import DaumPostcode from "react-daum-postcode";

import Modal from "react-modal"; // 추가

import { Link } from "react-router-dom";

const Friend1 = () =>{
    let {id} = useParams();
    const [roadAddress, setRoadAddress] = useState("");
    const [isOpen, setIsOpen] = useState(false); //추가

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

    // 검색 클릭
    const toggle = () =>{
        setIsOpen(!isOpen);
    }
    return(
        <div>
            <h2>친구1의 주소를 입력해주세요!</h2>
            <input value={roadAddress} readOnly placeholder="도로명 주소" onClick={toggle}/>
            <br />
            <Modal isOpen={isOpen} ariaHideApp={false} style={customStyles}>
                <button onClick={toggle}>x</button>
                <DaumPostcode onComplete={completeHandler1} height="100%" />
            </Modal>
            <Link to="/friend2">다음</Link>
            
        </div>
    );
}

export default Friend1;