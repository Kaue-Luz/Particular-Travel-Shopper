import {
  HistoryContainer,
  HistoryList,
  InputField,
  LoadButton,
  Title,
} from "./styles";

export function RideHistory() {
  return (
    <HistoryContainer>
      <Title>Histórico de Viagens</Title>
      <InputField type="text" placeholder="ID do Usuário" />
      <LoadButton onClick={() => alert("Carregar Histórico")}>
        Carregar Histórico
      </LoadButton>
      <HistoryList>
        <li>
          Viagem 1 - <span>Detalhes da viagem 1...</span>
        </li>
        <li>
          Viagem 2 - <span>Detalhes da viagem 2...</span>
        </li>
      </HistoryList>
    </HistoryContainer>
  );
}
