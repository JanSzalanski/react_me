import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';

const Head = styled.h1`
  color: ${({ theme }) => theme.white};
  padding: 25px 0;
`;

const People = () => (
  <PageTemplate pageType="people">
    <Head>Ludzie</Head>
  </PageTemplate>
);

export default People;
