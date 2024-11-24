import { FormButton, FormContainer, FormTitle, InputField } from "./style";

export function RideRequestForm() {
  const handleSubmit = () => {
    alert("Solicitação de viagem estimada!");
  };

  return (
    <FormContainer>
      <FormTitle>Solicitação de Viagem</FormTitle>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={(e) => e.preventDefault()}
      >
        <InputField type="text" placeholder="ID do Usuário" />
        <InputField type="text" placeholder="Endereço de Origem" />
        <InputField type="text" placeholder="Endereço de Destino" />
        <FormButton onClick={handleSubmit}>Estimar Viagem</FormButton>
      </form>
    </FormContainer>
  );
}
