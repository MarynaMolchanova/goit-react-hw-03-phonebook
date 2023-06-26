import styled from 'styled-components';

export const Items = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 3vw;

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  @media screen and (min-width: 480px) {
    font-size: 1em;
  }
`;

export const Link = styled.a`
  color: blue;
  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: green;
  }
`;

export const Button = styled.button`
  padding: 2px 4px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #487996;
  border-radius: 5px;
  background-color: #ebf4f8;
  color: #002359c4;

  transition: all 250ms linear;

  &:hover,
  &:focus {
    border: 1px solid #ca0505;
    color: #ebf4f8;
    background-color: #b71111;
  }
`;
