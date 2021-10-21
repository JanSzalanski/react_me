import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import Button from 'components/Button/Button';

const Root = () => (
  <div>
    <GlobalStyle />
    <h1>Hello World</h1>
    <Button>close / save</Button>
    <Button secondary>remove</Button>
  </div>
);

export default Root;
