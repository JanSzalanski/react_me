import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './Heading';

storiesOf('Heading', module)
  .add('Normal', () => <Heading>Hello World</Heading>)
  .add('Big', () => <Heading big>Hello World</Heading>);
