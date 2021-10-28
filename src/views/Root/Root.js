import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
  <>
    <GlobalStyle />
    <h1>Hello world</h1>
    <Button width="150px">Button</Button>
    <Button secondary>open / close</Button>
  </>
);

export default Root;
