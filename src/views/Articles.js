import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';

const Head = styled.h1`
  color: ${({ theme }) => theme.white};
`;

const Articles = () => (
  <PageTemplate pageType="article">
    <Head>Artykuły</Head>
  </PageTemplate>
);

export default Articles;
