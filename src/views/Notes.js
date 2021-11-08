import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import Card from 'components/molecules/Card/Card';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';

const StyledPageHeader = styled.h1`
  display: block;
  position: relative;
  color: ${({ theme }) => theme.white};
  padding: 25px 0;
`;

const StyledGridWrapper = styled.div`
  padding: 25px 100px 25px 0px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`;

const StyledInput = styled(Input)`
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);

  :checked {
    outline: 1px solid red;
  }
`;

const Notes = () => (
  <PageTemplate>
    <StyledPageHeader>
      <Heading big as="h1">
        O projekcie
      </Heading>
      <Paragraph>6 notes</Paragraph>
      <StyledInput search placeholder="search" />
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
