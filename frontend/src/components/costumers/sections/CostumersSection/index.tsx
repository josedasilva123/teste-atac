import { Container } from "../../../shared/fragments/Container";
import { CostumerList } from "./CostumerList";

export function CostumersSection() {
  return (
    <section id="costumers" className="background-gray padding-80">
      <Container>
        <CostumerList />
      </Container>
    </section>
  );
}
