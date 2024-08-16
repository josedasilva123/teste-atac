import { Text } from "../../../../shared/fragments/_content/Text";
import { CostumerCard } from "../../../scructures/cards/CostumerCard";
import { Controls } from "./Controls";
import { Button } from "../../../../shared/fragments/Button";
import { useCostumers } from "../../../providers/CostumersProvider/useCostumers";

export function CostumerList() {
  const { search, setSearch, isLoading, costumerList } = useCostumers();

  return isLoading ? (
    <Text tag="p">Carregando...</Text>
  ) : (
    <>
      <Controls />

      {search ? (
        <div>
          <Text tag="p">
            Resultados de busca para <strong>{search}</strong> -{" "}
            {costumerList?.length}
          </Text>
          <Button onClick={() => setSearch("")}>Limpar a busca</Button>
        </div>
      ) : null}

      {costumerList && costumerList.length > 0 ? (
        <ul>
          {costumerList?.map((costumer) => (
            <CostumerCard key={costumer.id} costumer={costumer} />
          ))}
        </ul>
      ) : (
        <Text tag="p">Nenhum cliente encontrado</Text>
      )}
    </>
  );
}
