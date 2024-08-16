import { Input } from "../../../../../shared/fragments/_fields/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../../../../shared/fragments/Button";
import { Icon } from "../../../../../shared/fragments/Icon";
import { useCostumers } from "../../../../providers/CostumersProvider/useCostumers";
import { CreateCostumerModal } from "../../../../scructures/modals/CreateCostumerModal";
import { BestRouteModal } from "../../../../scructures/modals/BestRouteModal";
import styles from "./style.module.scss";

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
    <div className={styles.box}>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          type="text"
          placeholder="Buscar pelo nome..."
          {...register("search")}
          required
        />
        <Button
          buttonVariant="outline1"
          buttonSize="round"
          type="submit"
          title="Buscar"
          aria-label="search"
        >
          <Icon icon="search" />
        </Button>
      </form>
      <div className={styles.buttonBox}>
        <CreateCostumerModal />
        <BestRouteModal />
      </div>
    </div>
  );
}
