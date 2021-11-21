import styled, { css } from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  padding: 0;
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.grey300};
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
// background-color: ${({ color }) => color || '#2bd8ff'}; //#2bffd8,#ff2bd8,#d82bff;
