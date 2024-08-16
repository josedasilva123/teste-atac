import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../../../../enums/queries.enum";
import { costumersRequest } from "../../../../data/costumers/_index";
import { Text } from "../../../shared/fragments/_content/Text";
import { Title } from "../../../shared/fragments/_content/Title";
import { CostumerCard } from "../cards/CostumerCard";

export function BestRouteInfo() {
  const { isLoading, data } = useQuery({
    queryKey: [QueryKeys.COSTUMERS],
    queryFn: costumersRequest.getBestRoute,
  });

  return isLoading ? (
    <Text tag="p">Carregando...</Text>
  ) : (
    <div>
      <Title tag="h2">Melhor rota</Title>
      <Text tag="p">Confira baixo a melhor rota entre os clientes</Text>
      {data && data.path ? (
        <ol>
          {data.path.map((costumer) => (
            <CostumerCard key={costumer.id} costumer={costumer} />
          ))}
        </ol>
      ) : null}
    </div>
  );
}
