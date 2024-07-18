import styled from "styled-components";

const ContainerBotaoPassos = styled.button`
    border: none;
    background: none;

    .radio-inputs {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-radius: .9rem;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
  padding: 2%;
  width: 150px;
  font-size: 14px;
}

.radio-inputs .radio {
  flex: 1 1 auto;
  text-align: center;
}

.radio-inputs .radio input {
  display: none;
}

.radio-inputs .radio .name {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  border: none;
  padding: .5rem 0;
  color: rgba(51, 65, 85, 1);
  transition: all .15s ease-in-out;
}

.radio-inputs .radio input:checked + .name {
  background-color: #494545;
  font-weight: 400;
  color: #fff;
}
`

const BotaoPassos = () => {
    return (
        <ContainerBotaoPassos>
            <div className="radio-inputs">
                <label className="radio">
                    <input type="radio" name="radio" checked/>
                        <span className="name">Gastos</span>
                </label>
                <label className="radio">
                    <input type="radio" name="radio"/>
                        <span className="name">Evolução</span>
                </label>
            </div>
        </ContainerBotaoPassos>
    )
}

export default BotaoPassos;