import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import Card from 'components/molecules/Card/Card';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';

const StyledPageHeader = styled.h1`
  display: block;
  color: ${({ theme }) => theme.white};
  padding: 25px 0;
`;

const StyledGridWrapper = styled.div`
  padding: 25px 100px 25px 0px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`;

const Notes = () => (
  <PageTemplate>
    <StyledPageHeader>
      <Heading placeholder="search" search>
        {' '}
        O Projekcie
      </Heading>
      <Paragraph>6 notes</Paragraph>
      <Input search placeholder="search" />
    </StyledPageHeader>
    <StyledGridWrapper>
      <Card cardType="note" />
      <Card cardType="note" />
      <Card cardType="note" />
      <Card cardType="note" />
      <Card cardType="note" />
      <Card cardType="note" />
    </StyledGridWrapper>
  </PageTemplate>
);

export default Notes;
