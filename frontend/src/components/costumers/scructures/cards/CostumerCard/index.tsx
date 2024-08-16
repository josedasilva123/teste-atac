import { ICostumer } from "../../../../../interfaces/costumers.interface";
import { Text } from "../../../../shared/fragments/_content/Text";
import { Title } from "../../../../shared/fragments/_content/Title";

interface Props {
  costumer: ICostumer;
}

export function CostumerCard({ costumer }: Props) {
  return (
    <li>
      <Title tag="h3" titleSize="four">{costumer.name}</Title>
      <Text tag="p">{costumer.email}</Text>
      <Text tag="p">{costumer.phone}</Text>
      <div>
        <Title tag="h4" titleSize="five">Coordenadas</Title>
        <Text tag="p">X: {costumer.x}</Text>
        <Text tag="p">Y: {costumer.y}</Text>
      </div>
    </li>
  );
}
