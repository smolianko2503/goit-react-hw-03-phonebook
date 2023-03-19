import styled from 'styled-components';

export const List = styled.li`
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
`;

export const ButtonDelete = styled.button`
:hover {
  background-color: red;
  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;
