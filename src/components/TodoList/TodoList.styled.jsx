import styled from '@emotion/styled';

export const List = styled.li`
  margin: 0;
  padding: 5px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-column-gap: 10px;
  grid-row-gap: 1em;
  list-style: none;
  border: solid 2px black;
`;
