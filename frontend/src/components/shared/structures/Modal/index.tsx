import FocusTrap from "focus-trap-react";
import { Icon } from "../../fragments/Icon";

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

export function Modal({ children, onClose }: Props) {
  return (
    <div>
      <FocusTrap>
        <div role="dialog">
          <button title="Fechar" aria-label="close" onClick={onClose}>
            <Icon icon="close" />
            {children}
          </button>
        </div>
      </FocusTrap>
    </div>
  );
}
