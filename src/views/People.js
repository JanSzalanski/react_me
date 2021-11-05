import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';

const Head = styled.h1`
  color: ${({ theme }) => theme.white};
`;

const People = () => (
  <PageTemplate pageType="people">
    <Head>Ludzie</Head>
  </PageTemplate>
);

export default People;
