import FocusTrap from "focus-trap-react";
import { Icon } from "../../fragments/Icon";
import { createPortal } from "react-dom";
import { useOutClick } from "../../../../hooks/useOutClick";
import { useKeyboard } from "../../../../hooks/useKeyboard";

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

export function Modal({ children, onClose }: Props) {
  const modalRef = useOutClick<HTMLDivElement>(onClose);
  const { ref: closeButtonRef } = useKeyboard<HTMLButtonElement>("escape");

  return createPortal(
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
          </button>
          {children}
        </div>
      </FocusTrap>
    </div>,
    document.body
  );
}
