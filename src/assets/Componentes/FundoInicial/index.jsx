import styled from "styled-components";
import BotaoPassos from "../BotaoPassos";

import grafico from '/imagens/grafico.png'
import fundo from '/imagens/fundo.svg'

const ContainerFundoInicio = styled.div`
    position: absolute;
    left: 2%;
    width: 96vw;
    height: 50vh;
    padding-bottom: 5%;
    border-radius: 25px;
    padding: 2%;
    background-image: url(${fundo});
    background-repeat: no-repeat;
    background-size: cover;

    

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