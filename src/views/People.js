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
  right: 100px;
  top: 50%;
  transform: translateY(-50%);
`;

const People = () => (
  <PageTemplate pageType="people">
    <StyledPageHeader>
      <Heading big as="h1">
        Ludzie
      </Heading>
      <Paragraph>6 notes</Paragraph>
      <StyledInput required activeColor="people" search placeholder="search" />
    </StyledPageHeader>
    <StyledGridWrapper>
      <Card cardType="people" />
      <Card cardType="people" />
      <Card cardType="people" />
    </StyledGridWrapper>
  </PageTemplate>
);

export default People;
