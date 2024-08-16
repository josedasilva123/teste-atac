import { useState } from "react";
import { Button } from "../../../../shared/fragments/Button";
import { Icon } from "../../../../shared/fragments/Icon";
import { Modal } from "../../../../shared/structures/Modal";
import { BestRouteInfo } from "../../BestRouteInfo";

export function BestRouteModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalVisible(true)}>
        <Icon icon="map" />
        Calcular rota
      </Button>
      {isModalVisible ? (
        <Modal onClose={() => setIsModalVisible(false)}>
          <BestRouteInfo />
        </Modal>
      ) : null}
    </>
  );
}
