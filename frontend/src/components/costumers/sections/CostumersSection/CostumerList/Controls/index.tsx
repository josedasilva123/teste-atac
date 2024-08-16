import { Dispatch, SetStateAction } from "react";
import { Input } from "../../../../../shared/fragments/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../../../../shared/fragments/Button";
import { Icon } from "../../../../../shared/fragments/Icon";

interface Props {
  setSearch: Dispatch<SetStateAction<string>>;
}

interface FormValues {
  search: string;
}

export function Controls({ setSearch }: Props) {
  const { register, handleSubmit } = useForm<FormValues>();

  const submit: SubmitHandler<FormValues> = (formData) => {
    setSearch(formData.search);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <Input
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
