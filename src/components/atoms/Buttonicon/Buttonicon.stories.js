import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';
// eslint-disable-next-line import/no-unresolved
import ButtonIcon from './ButtonIcon';

const YellowBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  background-color: ${({ theme }) => theme.note};
`;
storiesOf('ButtonIcon', module)
  .addDecorator(story => <YellowBack>{story()}</YellowBack>)
  .add('Bulb', () => <ButtonIcon active icon={bulbIcon} />)
  .add('Logout', () => <ButtonIcon active icon={logoutIcon} />)
  .add('Pen', () => <ButtonIcon active icon={penIcon} />)
  .add('Plus', () => <ButtonIcon active icon={plusIcon} />)
  .add('Twitter', () => <ButtonIcon active icon={twitterIcon} />);
