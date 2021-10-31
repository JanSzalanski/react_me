/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Primary', () => {
    const label = 'Colors';
    const options = {
      primary: '#2bd8ff',
      secondary: '#ff2bd8',
      tertiary: '#ffd82b',
    };
    const defaultValue = '#2bd8ff';
    const groupId = 'GROUP-ID1';

    const value = select(label, options, defaultValue, groupId);
    return <Button color={value}>Button</Button>;
  })
  .add('Secondary', () => <Button secondary> Button sec</Button>);
