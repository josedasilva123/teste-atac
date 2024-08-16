import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../../../../../enums/queries.enum";
import { useState } from "react";
import { costumersRequest } from "../../../../../data/costumers/_index";
import { Text } from "../../../../shared/fragments/_content/Text";
import { CostumerCard } from "../../../scructures/CostumerCard";

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
    <ul>
      {costumerList?.map((costumer) => (
        <CostumerCard key={costumer.id} costumer={costumer} />
      ))}
    </ul>
  );
}
