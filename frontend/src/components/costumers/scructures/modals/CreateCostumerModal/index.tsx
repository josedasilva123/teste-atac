import { useState } from "react";
import { Modal } from "../../../../shared/structures/Modal";
import { Title } from "../../../../shared/fragments/_content/Title";
import { Text } from "../../../../shared/fragments/_content/Text";
import { CreateCostumerForm } from "../../forms/CreateCostumerForm";
import { Button } from "../../../../shared/fragments/Button";
import { Icon } from "../../../../shared/fragments/Icon";
import styles from "./style.module.scss";

export function CreateCostumerModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <Button buttonVariant="solid1" onClick={() => setIsModalVisible(true)}>
        <Icon icon="add" /> Adicionar cliente
      </Button>

      {isModalVisible ? (
        <Modal onClose={() => setIsModalVisible(false)}>
          <div className={styles.box}>
            <Title tag="h2" titleSize="two">
              Cadastrar cliente
            </Title>
            <Text tag="p">Preencha os campos para cadastrar um cliente</Text>
            <CreateCostumerForm callback={() => setIsModalVisible(false)} />
          </div>
        </Modal>
      ) : null}
    </>
  );
}
