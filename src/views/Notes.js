import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';

const Head = styled.h1`
  color: ${({ theme }) => theme.white};
`;

const Notes = () => (
  <PageTemplate>
    <Head>O Projekcie</Head>
  </PageTemplate>
);

export default Notes;
