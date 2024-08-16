import { ICostumer } from "../../../../interfaces/costumers.interface";

interface Props {
  costumer: ICostumer;
}

export function CostumerCard({ costumer }: Props) {
  return (
    <li>
      <h3>{costumer.name}</h3>
      <p>{costumer.email}</p>
      <p>{costumer.phone}</p>
      <div>
        <h4>Coordenadas</h4>
        <p>X: {costumer.x}</p>
        <p>Y: {costumer.y}</p>
      </div>
    </li>
  );
}
