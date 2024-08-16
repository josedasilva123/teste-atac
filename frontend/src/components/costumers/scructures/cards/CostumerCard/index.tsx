import { ICostumer } from "../../../../../interfaces/costumers.interface";
import { Title } from "../../../../shared/fragments/_content/Title";
import { Icon } from "../../../../shared/fragments/Icon";
import { IconText } from "../../../../shared/structures/IconText";
import styles from "./style.module.scss";

interface Props {
  costumer: ICostumer;
}

export function CostumerCard({ costumer }: Props) {
  return (
    <li className={styles.card}>
      <div className={styles.infos}>
        <Title tag="h3" titleSize="four">
          {costumer.name}
        </Title>

        <div>
          <IconText icon={<Icon icon="mail" />} tag="p">
            {" "}
            {costumer.email}
          </IconText>

          <IconText icon={<Icon icon="phone" />} tag="p">
            {costumer.phone}
          </IconText>
        </div>
      </div>

      <div className={styles.coordinates}>
        <Title tag="h4" titleSize="five">
          Coordenadas
        </Title>
        <div>
          <IconText icon={<Icon icon="location_on" />} tag="p">
            X: {costumer.x}
          </IconText>
          <IconText icon={<Icon icon="location_on" />} tag="p">
            Y: {costumer.y}
          </IconText>
        </div>
      </div>
    </li>
  );
}
