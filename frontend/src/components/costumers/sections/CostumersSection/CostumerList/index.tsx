import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../../../../../enums/queries.enum";
import { useState } from "react";
import { costumersRequest } from "../../../../../data/costumers/_index";
import { Text } from "../../../../shared/fragments/_content/Text";
import { CostumerCard } from "../../../scructures/CostumerCard";
import { Controls } from "./Controls";
import { Button } from "../../../../shared/fragments/Button";

export function CostumerList() {
  const [search, setSearch] = useState("");

  const { data: costumerList, isLoading } = useQuery({
    queryKey: [QueryKeys.COSTUMERS, search],
    queryFn: async () => {
      const data = await costumersRequest.getMany({ name: search });

      return data;
    },
  });

  return isLoading ? (
    <Text tag="p">Carregando...</Text>
  ) : (
    <>
      <Controls setSearch={setSearch} />

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
