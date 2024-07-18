import styled from "styled-components";
import menu from '../../../../public/imagens/menu.png';
import whatsapp from '../../../../public/imagens/whatsapp.png';
import arrow from '../../../../public/imagens/laboratory.png';
import linkdin from '../../../../public/imagens/linkdin.png';
import dribble from '../../../../public/imagens/dribble.png';


const ContainerMenuLateral = styled.div`
    z-index: 1;
    margin-top: 5%;
    position: relative;
    left: 5%;

    .redeSocial{
        border-radius: 50%;
        background: #fff;
    }


    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`

const Menulateral = () => {
    return (
        <ContainerMenuLateral>
            
            <img src={menu} alt="" />
            <img src={arrow} alt="" />
            <div className="redeSocial">
                <img src={whatsapp} alt="" />

            </div>
            <div className="redeSocial">
                <img src={linkdin} alt="" />

            </div>
            <div className="redeSocial">
                <img src={dribble} alt="" />

            </div>


        </ContainerMenuLateral>

    )
}

export default Menulateral;