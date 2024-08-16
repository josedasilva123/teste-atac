import { Container } from "../../../shared/fragments/Container";
import { CostumerList } from "./CostumerList";
import styles from "./style.module.scss";

export function CostumersSection() {
  return (
    <section
      id="costumers"
      className={`${styles.section} background-gray padding-80`}
    >
      <Container>
        <CostumerList />
      </Container>
    </section>
  );
}
