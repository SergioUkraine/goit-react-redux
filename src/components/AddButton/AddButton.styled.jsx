import styled from '@emotion/styled';
import { MdAdd } from 'react-icons/md';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100px;
  height: 100%;
  border: 2px black solid;
  border-radius: 5px;
  transition: 250ms cubic-bezier(0.19, 1, 0.22, 1);
  :hover {
    background-color: lightcyan;
    transform: scale(1.01);
  }
`;

export const ButtonIcon = styled(MdAdd)`
  width: 50px;
  height: 50px;
`;
