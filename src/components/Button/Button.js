import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  background-color: #2bd8ff;
  width: ${({ width }) => width || '220px'};
  height: 40px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #e6e6e6;
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
