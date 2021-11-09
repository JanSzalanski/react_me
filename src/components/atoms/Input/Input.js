import styled, { css } from 'styled-components';

import magIcon from 'assets/icons/magnifier.svg';

const Input = styled.input`
  padding: 15px 30px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.bold};
  background-color: ${({ theme }) => theme.grey100};
  border: none;
  border-radius: 50px;
  appearance: none;
  outline: none;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey400};
  }

  :enabled {
    border: 2px solid ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
    /* outline:  */
  }
  :checked {
    outline: none;
  }
  :valid {
    background-color: ${({ theme }) => theme.white};
  }

  ${({ search }) =>
    search &&
    css`
      padding: 10px 20px 10px 40px;
      background-image: url(${magIcon});
      background-size: 15px;
      background-position: 15px 50%;
      background-repeat: no-repeat;
      ::placeholder {
        letter-spacing: 0px;
      }
    `}
`;

export default Input;
