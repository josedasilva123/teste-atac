import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../../../../enums/queries.enum";
import { costumersRequest } from "../../../../data/costumers/_index";
import { Text } from "../../../shared/fragments/_content/Text";
import { Title } from "../../../shared/fragments/_content/Title";
import { CostumerCard } from "../cards/CostumerCard";
import styles from "./style.module.scss";

export function BestRouteInfo() {
  const { isLoading, data } = useQuery({
    queryKey: [QueryKeys.COSTUMERS],
    queryFn: costumersRequest.getBestRoute,
  });

  return isLoading ? (
    <Text tag="p">Carregando...</Text>
  ) : (
    <div className={styles.wrapper}>
      <Title tag="h2" titleSize="two">Melhor rota</Title>
      <Text tag="p">Confira baixo a melhor rota entre os clientes</Text>
      {data && data.path ? (
        <ol className={styles.list}>
          {data.path.map((costumer, index) => (
            <div key={costumer.id} className={styles.card}>
              <span>{index + 1}</span>
            <CostumerCard  costumer={costumer} />
            </div>
            
          ))}
        </ol>
      ) : null}
    </div>
  );
}
