import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-weight: bold;
  color: #002359c4;
`;

export const Input = styled.input`
  padding: 5px;
  border: 1px solid #487996;
  border-radius: 5px;
  background-color: #ebf4f8;
  color: #002359c4;

  transition: border 250ms linear;

  &:hover,
  &:focus {
    border: 1px solid #2196f3;
    outline: rgba(0, 0, 0, 0);
  }
`;
