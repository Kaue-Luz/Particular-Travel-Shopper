export function RideHistory() {
  return (
    <div>
      <h2>Histórico de Viagens</h2>
      <input type="text" placeholder="ID do Usuário" />
      <button onClick={alert}>Carregar Histórico</button>
      <ul>
        <li>viagem 1 ....</li>
        <li>viagem 2 ....</li>
      </ul>
    </div>
  );
}
