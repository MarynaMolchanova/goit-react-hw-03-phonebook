import styled from 'styled-components';
import { BsTelephonePlus } from 'react-icons/bs';

export const Form = styled.form`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 25px;
  max-width: 250px;

  @media screen and (min-width: 426px) {
    max-width: 330px;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
  color: #002359c4;
`;

export const Input = styled.input`
  display: block;
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
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

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  width: 180px;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid #487996;
  border-radius: 5px;
  background-color: #ebf4f8;
  color: #002359c4;

  transition: all 250ms linear;

  &:hover,
  &:focus {
    border: 1px solid #2196f3;
    color: #ebf4f8;
    background-color: #002359c4;
  }
`;

export const IconBtn = styled(BsTelephonePlus)`
  margin-left: 10px;
`;
