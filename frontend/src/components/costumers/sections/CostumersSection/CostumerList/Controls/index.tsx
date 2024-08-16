import { Input } from "../../../../../shared/fragments/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../../../../shared/fragments/Button";
import { Icon } from "../../../../../shared/fragments/Icon";
import { useCostumers } from "../../../../providers/CostumersProvider/useCostumers";

interface FormValues {
  search: string;
}

export function Controls() {
  const { setSearch } = useCostumers();

  const { register, handleSubmit, reset } = useForm<FormValues>();

  const submit: SubmitHandler<FormValues> = (formData) => {
    setSearch(formData.search);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          type="text"
          placeholder="Buscar pelo nome..."
          {...register("search")}
          required
        />
        <Button type="submit" title="Buscar" aria-label="search">
          <Icon icon="search" />
        </Button>
      </form>
    </div>
  );
}
