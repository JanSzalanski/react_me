import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 67px;
  height: 67px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: ${props => (props.secondary ? '65%' : '40%')}; //dość prostackie ?
  border: none;
  background-color: ${({ active }) => (active ? 'white' : 'transparent')};

  &.active {
    background-color: #373737;
  }
`;

export default ButtonIcon;
