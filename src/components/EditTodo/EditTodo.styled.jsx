import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const EditorForm = styled(Form)`
  padding: 10px 16px;
  display: flex;
  width: 500px;
  flex-direction: column;
  align-items: center;
  border: solid black 2px;
  border-radius: 4px;
  background-color: lightblue;
`;

export const Title = styled.h2`
  margin: 0;
  margin-bottom: 20px;
  padding: 0;
`;

export const Label = styled.label`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Input = styled(Field)`
  margin-left: 5px;
  width: 350px;
  height: 35px;
`;

export const Error = styled(ErrorMessage)`
  position: absolute;
  top: 36px;
  left: calc(100% / 2 - 100px);
  font-size: 14px;
  color: red;
`;

export const Button = styled.button`
  height: 30px;
  width: 100px;
  border-radius: 4px;
  border-color: transparent;
  &:hover {
    background-color: lightgreen;
    color: white;
  }
`;
