import React from 'react';
import {
  Item,
  Checkbox,
  Task,
  Name,
  Description,
  Controls,
  DeleteButton,
  EditButton,
} from './ListItem.styled';

function ListItem({
  item,
  onCheckboxChange,
  onDeleteButtonClick,
  onEditButtonClick,
}) {
  const { id, done, name, description } = item;
  return (
    <Item done={done}>
      <Checkbox
        type="checkbox"
        name="done"
        checked={done}
        onChange={() => onCheckboxChange(id)}
      />
      <Task done={done}>
        <Name>{name}</Name> <Description>{description}</Description>
      </Task>
      <Controls>
        <EditButton
          type="button"
          onClick={() => {
            onEditButtonClick(id);
          }}
        >
          Редагувати
        </EditButton>
        <DeleteButton type="button" onClick={() => onDeleteButtonClick(id)}>
          Видалити
        </DeleteButton>
      </Controls>
    </Item>
  );
}

export default ListItem;
