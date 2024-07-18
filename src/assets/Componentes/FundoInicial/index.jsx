import styled from "styled-components";
import BotaoPassos from "../BotaoPassos";

import grafico from '/imagens/grafico.png'

const ContainerFundoInicio = styled.div`
    position: absolute;
    left: 2%;
    background-color: #E1E0E0;
    width: 96vw;
    height: 50vh;
    padding-bottom: 5%;
    border-radius: 25px;
    padding: 2%;
    clip-path: polygon(26% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 75%, 0% 25%);

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        


        img{
            margin-top: 5%;
            width: 244px;
            height: auto;
        }

    }
`

const FundoInicial = () => {
    return (
        <ContainerFundoInicio>
            
            <BotaoPassos />
            <img src={grafico} alt="imagem de um grafico" />
        </ContainerFundoInicio>
    )
}

export default FundoInicial;