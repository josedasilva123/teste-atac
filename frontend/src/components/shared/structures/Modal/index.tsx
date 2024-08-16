import FocusTrap from "focus-trap-react";
import { Icon } from "../../fragments/Icon";
import { useOutClick } from "../../../../hooks/useOutclick";
import { useKeyboard } from "../../../../hooks/useKeyBoard";

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

export function Modal({ children, onClose }: Props) {
  const modalRef = useOutClick<HTMLDivElement>(onClose);
  const { ref: closeButtonRef } = useKeyboard<HTMLButtonElement>("escape");

  return (
    <div>
      <FocusTrap>
        <div role="dialog" ref={modalRef}>
          <button
            title="Fechar"
            aria-label="close"
            onClick={onClose}
            ref={closeButtonRef}
          >
            <Icon icon="close" />
            {children}
          </button>
        </div>
      </FocusTrap>
    </div>
  );
}
