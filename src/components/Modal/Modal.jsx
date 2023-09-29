import React from 'react';
import { useCallback, useEffect } from 'react';
import { Backdrop, ModalContent, CloseButton } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

function Modal({ children, hideModal }) {
  const handleCloseModal = useCallback(
    ({ code, target, currentTarget }) => {
      if (code === 'Escape' || target === currentTarget) {
        hideModal();
      }
    },
    [hideModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);
    document.documentElement.style.overflowY = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleCloseModal);
      document.documentElement.style.overflowY = 'visible';
    };
  }, [handleCloseModal]);

  return createPortal(
    <Backdrop onClick={handleCloseModal}>
      <ModalContent>
        {children} <CloseButton onClick={handleCloseModal} />
      </ModalContent>
    </Backdrop>,
    modalRoot
  );
}

export default Modal;
