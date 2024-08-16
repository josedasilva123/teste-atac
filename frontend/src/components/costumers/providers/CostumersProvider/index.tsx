import { createContext, useState } from "react";
import { ProviderProps } from "../../../../interfaces/context.interface";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { costumersRequest } from "../../../../data/costumers/_index";
import { QueryKeys } from "../../../../enums/queries.enum";
import { ICostumer } from "../../../../interfaces/costumers.interface";
import { CreateCostumerValues } from "../../scructures/forms/CreateCostumerForm";
import { Context } from "./_interface";

export const CostumerContext = createContext({} as Context);

export function CostumerProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState("");

  const client = useQueryClient();

  const { data: costumerList, isLoading } = useQuery({
    queryKey: [QueryKeys.COSTUMERS, search],
    queryFn: async () => {
      const data = await costumersRequest.getMany({ name: search });

      return data;
    },
  });

  const createClient = useMutation({
    mutationFn: async (data: CreateCostumerValues) => {
      const body = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        x: Number(data.x),
        y: Number(data.y),
      };

      const costumer = await costumersRequest.create(body);

      return costumer;
    },
    onSuccess: (data) => {
      setSearch("");
      client.setQueryData(
        [QueryKeys.COSTUMERS],
        (costumerList: ICostumer[]) => [...costumerList, data]
      );
    },
  });

  return (
    <CostumerContext.Provider
      value={{ search, setSearch, costumerList, isLoading, createClient }}
    >
      {children}
    </CostumerContext.Provider>
  );
}
