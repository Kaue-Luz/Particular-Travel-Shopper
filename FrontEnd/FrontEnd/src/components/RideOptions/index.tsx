import { ChooseButton, OptionCard, OptionsContainer, Title } from "./style";


export function RideOptions() {
  return (
    <OptionsContainer>
      <Title>Opções de Viagem</Title>

      <OptionCard>
        <p>
          Motorista: <span>João Silva</span>
        </p>
        <p>
          Veículo: <span>Chevrolet Onix</span>
        </p>
        <p>
          Avaliação: <span>4.8/5</span>
        </p>
        <p>
          Valor: R$ <span>20,00</span>
        </p>
        <ChooseButton onClick={() => alert("Opção Escolhida")}>
          Escolher
        </ChooseButton>
      </OptionCard>
    </OptionsContainer>
  );
}
