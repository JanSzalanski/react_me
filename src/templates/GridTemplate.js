import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

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

const GridTemplate = ({ children, pageType }) => (
  <PageTemplate pageType={pageType}>
    <StyledPageHeader>
      <Heading big as="h1">
        {pageType}
      </Heading>
      <Paragraph>6 {pageType}</Paragraph>
      <StyledInput required activeColor={pageType} search placeholder="search" />
    </StyledPageHeader>
    <StyledGridWrapper>{children}</StyledGridWrapper>
  </PageTemplate>
);

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageType: PropTypes.oneOf(['news', 'people', 'articles']),
};

GridTemplate.defaultProps = {
  pageType: 'news',
};

export default GridTemplate;
