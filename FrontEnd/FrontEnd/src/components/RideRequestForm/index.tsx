export function RideRequestForm() {
  return (
    <div>
      <h2>Solicitação de Viagem</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="ID do Usuário" />
        <input type="text" placeholder="Endereço de Origem" />
        <input type="text" placeholder="Endereço de Destino" />
        <button onClick={alert}>Estimar Viagem</button>
      </form>
    </div>
  );
}
