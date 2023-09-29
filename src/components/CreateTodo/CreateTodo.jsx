import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  EditorForm,
  Title,
  Label,
  Input,
  Error,
  Button,
} from './CreateTodo.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
});

function CreateTodo({ onSubmit }) {
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    await onSubmit(values);
    setSubmitting(false);
    resetForm();
  };
  return (
    <Formik
      initialValues={{ name: '', description: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <EditorForm>
          <Title>Створити задачу</Title>
          <Label>
            {'Назва:'}
            <Input type="text" name="name" />
            <Error name="name" component="div" />
          </Label>
          <Label>
            {'Опис:'} <Input type="text" name="description" />
            <Error name="description" component="div" />
          </Label>
          <Button type="submit" disabled={isSubmitting}>
            Створити
          </Button>
        </EditorForm>
      )}
    </Formik>
  );
}

export default CreateTodo;
