import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  padding: 15px;

  @media screen and (min-width: 426px) {
    padding: 32px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 15px;
  font-size: 32px;
  background: -webkit-linear-gradient(#0cf, #5a5a5a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (min-width: 426px) {
    margin-bottom: 25px;
    font-size: 52px;
  }
`;

export const Caption = styled.h2`
  margin-bottom: 15px;
  font-size: 22px;
  background: -webkit-linear-gradient(#438dff, #2f2f2f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (min-width: 426px) {
    margin-bottom: 25px;
    font-size: 30px;
  }
`;
