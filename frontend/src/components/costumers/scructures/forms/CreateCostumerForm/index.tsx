import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../../../shared/fragments/_fields/Input";
import { Button } from "../../../../shared/fragments/Button";
import { useState } from "react";
import { useCostumers } from "../../../providers/CostumersProvider/useCostumers";

export interface CreateCostumerValues {
  name: string;
  email: string;
  phone: string;
  x: string;
  y: string;
}

interface Props {
  callback?: () => void;
}

export function CreateCostumerForm({ callback }: Props) {
  const { createClient } = useCostumers();

  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm<CreateCostumerValues>();

  const submit: SubmitHandler<CreateCostumerValues> = async (formData) => {
    try {
      setLoading(true);
      await createClient.mutateAsync(formData);
      if (callback) callback();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <Input
        label="Nome"
        placeholder="Seu nome"
        type="text"
        {...register("name")}
        disabled={loading}
        required
      />
      <Input
        label="E-mail"
        placeholder="Seu e-mail"
        type="email"
        {...register("email")}
        disabled={loading}
        required
      />
      <Input
        label="Telefone"
        placeholder="Telefone"
        type="text"
        {...register("phone")}
        disabled={loading}
        required
      />
      <fieldset>
        <legend>Coordenadas</legend>
        <Input
          label="X"
          type="number"
          placeholder="Ex: 1"
          {...register("x")}
          disabled={loading}
          required
        />
        <Input
          label="Y"
          type="number"
          placeholder="Ex: 1"
          {...register("y")}
          disabled={loading}
          required
        />
      </fieldset>

      <Button buttonVariant="solid1" type="submit" disabled={loading}>
        {loading ? "Cadastrando..." : "Cadastrar"}
      </Button>
    </form>
  );
}
