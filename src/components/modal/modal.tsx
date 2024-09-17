import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import scss from "./modal.module.scss";

export const modalRoot = document.getElementById("modal-root") as HTMLElement;

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ onClose, children }: ModalProps) {

  useEffect(() => {
    const closeModalKey = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", closeModalKey);
    return () => { 
      window.removeEventListener("keydown", closeModalKey);
    };
  }, [onClose]);

  const closeModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { target, currentTarget } = event;
    if (target === currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={scss.Overlay} onClick={closeModal}>
      <div className={scss.Modal}>
        {children}
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};