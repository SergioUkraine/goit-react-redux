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
} from './EditTodo.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
});

function EditTodo({ onSubmit, task }) {
  const { name, description } = task;
  const handleSubmit = async (values, { setSubmitting }) => {
    await onSubmit(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ name: name, description: description }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <EditorForm>
          <Title>Редагувати задачу</Title>
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
            Редагувати
          </Button>
        </EditorForm>
      )}
    </Formik>
  );
}

export default EditTodo;
