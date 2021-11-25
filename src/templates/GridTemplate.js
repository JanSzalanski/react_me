import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import withContext from '../hoc/withContext';

const StyledPageHeader = styled.div`
  position: relative;
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
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

const GridTemplate = ({ children, pageContext }) => (
  <PageTemplate>
    <StyledPageHeader>
      <StyledHeading big as="h1">
        {pageContext}
      </StyledHeading>
      <Paragraph>6 {pageContext}</Paragraph>
      <StyledInput required activeColor={pageContext} search placeholder="search" />
    </StyledPageHeader>
    <StyledGridWrapper>{children}</StyledGridWrapper>
  </PageTemplate>
);

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageContext: PropTypes.oneOf(['news', 'people', 'articles']),
};

GridTemplate.defaultProps = {
  pageContext: 'news',
};

export default withContext(GridTemplate);
