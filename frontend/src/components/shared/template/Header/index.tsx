import { Title } from "../../fragments/_content/Title";
import { Container } from "../../fragments/Container";
import { ColorModeButton } from "../../structures/ColorModeButton";
import styles from "./style.module.scss";

export function Header() {
  return (
    <header className="background-white">
      <Container>
        <div className={styles.box}>
          <Title tag="h1" titleSize="one">
            Gerenciador de clientes
          </Title>
          <ColorModeButton />
        </div>
      </Container>
    </header>
  );
}
