import styled from "styled-components";
import FundoInicial from "../../Componentes/FundoInicial";
import miniGrafico from "/imagens/miniGraph.svg"

const ContainerInicio = styled.div`
    font-family: "Space Mono", monospace;
  font-weight: 100;
  font-style: normal;

  h2{
    font-size: 1.8rem;
    width: 100%;
  }

 .titulo2{
    h2{
        width: 45%;
    }
 }

@media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 95vw;
    position: absolute;
    padding: 0% 5%;

    .titulo{
        position: absolute;
        top: 50vh;

        .titulo2{
        display: flex;
        }
    }


}
    
`

const Inicio = () => {
    return (
        <ContainerInicio>
            <div className="fundo">
            <FundoInicial />

            </div>

            <div className="titulo">

                <h2>Acompanhe seu progresso</h2>
                <div className="titulo2">
                    <h2>financeiro</h2>
                    <img src={miniGrafico} alt="miniGrafico" />
                </div>
                <h2>em tempo real</h2>
            </div>
        </ContainerInicio>
    )
}

export default Inicio;