import styled from "styled-components";
import BotaoPassos from "../BotaoPassos";

import grafico from '/imagens/grafico.png'
import fundo from '/imagens/fundo.svg'

const ContainerFundoInicio = styled.div`
    position: absolute;
    right: 0;
    width: 45vw;
    height: 100vh;
    padding-bottom: 5%;
    border-radius: 25px;
    padding: 2%;
    background-image: url(${fundo});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    img{
            margin-top: 25%;
            width: 65%;
            height: auto;
        }

    

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        height: 45vh;
        width: 96vw;
        left: 2%;

        img{
            margin-top: 5%;
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