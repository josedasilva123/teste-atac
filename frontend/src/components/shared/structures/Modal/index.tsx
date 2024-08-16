import FocusTrap from "focus-trap-react";
import { Icon } from "../../fragments/Icon";
import { createPortal } from "react-dom";
import { useOutClick } from "../../../../hooks/useOutClick";
import { useKeyboard } from "../../../../hooks/useKeyboard";
import styles from "./style.module.scss";

interface Props {
  children: React.ReactNode;
  onClose: () => void;
  modalSize?: "lg";
}

export function Modal({ children, onClose, modalSize }: Props) {
  const modalRef = useOutClick<HTMLDivElement>(onClose);
  const { ref: closeButtonRef } = useKeyboard<HTMLButtonElement>("escape");

  return createPortal(
    <div className={styles.overlay}>
      <FocusTrap>
        <div
          role="dialog"
          ref={modalRef}
          className={`
            ${styles.box} 
            ${modalSize === "lg" ? styles.lg : ""}
          `}
        >
          <button
            className={styles.close}
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
