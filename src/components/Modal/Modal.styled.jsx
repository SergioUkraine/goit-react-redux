import styled from '@emotion/styled';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CloseButton = styled(AiOutlineCloseCircle)`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 25px;
  height: 25px;
  transition: transform 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    color: orange;
    transform: rotate(360deg);
  }
  :active {
    color: red;
  }
`;
