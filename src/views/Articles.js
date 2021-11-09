import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
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

const Articles = () => (
  <PageTemplate pageType="article">
    <StyledPageHeader>
      <Heading big as="h1">
        Artykuły
      </Heading>
      <Paragraph>6 notes</Paragraph>
      <StyledInput required activeColor="article" search placeholder="search" />
    </StyledPageHeader>
    <StyledGridWrapper>
      <Card cardType="article" />
      <Card cardType="article" />
      <Card cardType="article" />
      <Card cardType="article" />
    </StyledGridWrapper>
  </PageTemplate>
);

export default Articles;
