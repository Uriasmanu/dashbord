import styled from "styled-components";

import whatsapp from '/imagens/whatsapp.png';
import arrow from '/imagens/arrow.svg';
import linkdin from '/imagens/linkdin.png';
import dribble from '/imagens/dribble.png';
import { useState } from "react";


const ContainerMenuLateral = styled.div`
    z-index: 1;
    position: relative;
    left: 2%;
    margin-top: 1%;


.icon {
  position: relative;
  background: #fff;
  border-radius: 50%;
  margin: 10px;
  width: 50px;
  height: 50px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}


/* Hide the default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.container {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
}

.checkmark {
  position: relative;
  top: 0;
  left: 0;
  height: 50px;
  width: 50px;
}

.checkmark span {
  width: 32px;
  height: 2px;
  background-color: #272727;
  position: absolute;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
}

.checkmark span:nth-child(1) {
  top: 38%;
}

.checkmark span:nth-child(2) {
  top: 52%;
}

.checkmark span:nth-child(3) {
  top: 67%;
}

.container input:checked + .checkmark span:nth-child(1) {
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  -webkit-transform: translateY(-50%) rotate(45deg);
  -moz-transform: translateY(-50%) rotate(45deg);
  -ms-transform: translateY(-50%) rotate(45deg);
  -o-transform: translateY(-50%) rotate(45deg);
}

.container input:checked + .checkmark span:nth-child(2) {
  top: 50%;
  transform: translateY(-50%) rotate(-45deg);
  -webkit-transform: translateY(-50%) rotate(-45deg);
  -moz-transform: translateY(-50%) rotate(-45deg);
  -ms-transform: translateY(-50%) rotate(-45deg);
  -o-transform: translateY(-50%) rotate(-45deg);
}

.container input:checked + .checkmark span:nth-child(3) {
  transform: translateX(-50px);
  -webkit-transform: translateX(-50px);
  -moz-transform: translateX(-50px);
  -ms-transform: translateX(-50px);
  -o-transform: translateX(-50px);
  opacity: 0;
}


    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        height: 300px;
    }
`

const Menulateral = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <ContainerMenuLateral>

<label className="container">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                
                <div className="checkmark icon">
                    <span></span>
                    <span></span>
                    <span></span>
                
                </div>
            </label>
            <img src={arrow} alt="" className="icon" />
            <div className="icon">
                <img src={whatsapp} alt="" />

            </div>
            <div className="icon">
                <img src={linkdin} alt="" />

            </div>
            <div className="icon">
                <img src={dribble} alt="" />

            </div>


        </ContainerMenuLateral>

    )
}

export default Menulateral;