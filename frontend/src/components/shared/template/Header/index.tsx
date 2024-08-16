import { Title } from "../../fragments/_content/Title";
import { Container } from "../../fragments/Container";

export function Header() {
  return (
    <header>
      <Container>
        <Title tag="h1" titleSize="one">
          Gerenciador de clientes
        </Title>
      </Container>
    </header>
  );
}
