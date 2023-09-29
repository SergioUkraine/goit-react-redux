import React, { useState } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import TodoList from 'components/TodoList';
import CreateTodo from 'components/CreateTodo';
import EditTodo from 'components/EditTodo/EditTodo';
import defaultTodos from 'data/defaultList';
import AddButton from 'components/AddButton';
import Modal from 'components/Modal';
import { nanoid } from 'nanoid';

function Tasks() {
  const [todosList, setTodosList] = useLocalStorage('todos', defaultTodos);
  const [currentEditionsId, setCurrentEditionsId] = useState('');
  const [isCreateShow, setCreateShow] = useState(false);
  const [isEditShow, setIsEditShow] = useState(false);

  const handleCheckboxChange = id => {
    setTodosList(
      todosList.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const handleDeleteItem = id => {
    setTodosList(todosList.filter(todo => todo.id !== id));
  };

  const handleEditItem = id => {
    setCurrentEditionsId(id);
    handleShowEditor(true);
  };

  const handleSubmitCreate = e => {
    const newTask = { id: nanoid(), ...e, done: false };
    setTodosList(prevTodosList => [...prevTodosList, newTask]);
  };

  const handleSubmitEdite = e => {
    setTodosList(prevTodosList =>
      prevTodosList.map(todo => {
        if (todo.id === currentEditionsId)
          return {
            ...todo,
            name: e.name,
            description: e.description,
          };
        return todo;
      })
    );
  };

  const sortTodos = list => {
    return list.sort((a, b) => {
      if (a.done === b.done) {
        return 0;
      }
      if (a.done) {
        return 1;
      }
      return -1;
    });
  };

  const handleCloseAll = () => {
    setCreateShow(false);
    setIsEditShow(false);
  };

  const handleShowEditor = () => {
    setIsEditShow(true);
  };

  const handleShowCreacte = () => {
    setCreateShow(true);
  };

  return (
    <>
      <TodoList
        todos={sortTodos(todosList)}
        onCheckboxChange={handleCheckboxChange}
        onEditButtonClick={handleEditItem}
        onDeleteButtonClick={handleDeleteItem}
      >
        <AddButton handleClick={handleShowCreacte} />
      </TodoList>

      {isCreateShow ? (
        <Modal hideModal={handleCloseAll}>
          <CreateTodo onSubmit={handleSubmitCreate} />
        </Modal>
      ) : null}
      {isEditShow ? (
        <Modal hideModal={handleCloseAll}>
          <EditTodo
            onSubmit={handleSubmitEdite}
            task={todosList.find(todo => todo.id === currentEditionsId)}
          />
        </Modal>
      ) : null}
    </>
  );
}

export default Tasks;
