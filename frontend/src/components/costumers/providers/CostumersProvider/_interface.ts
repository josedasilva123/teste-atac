import { UseMutationResult } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";
import { ICostumer } from "../../../../interfaces/costumers.interface";
import { CreateCostumerValues } from "../../scructures/forms/CreateCostumerForm";

export interface Context {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
    costumerList?: ICostumer[];
    isLoading: boolean;
    createClient: UseMutationResult<
      ICostumer,
      Error,
      CreateCostumerValues,
      unknown
    >;
  }
  