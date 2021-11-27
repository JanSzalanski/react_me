import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ContactBar from 'components/organisms/ContactBar/ContactBar';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';
import withContext from '../hoc/withContext';

const StyledWrapper = styled.div`
  position: relative;
  padding: 25px 150px 25px 25px;
`;

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
  /* padding: 25px 100px 25px 0px; */
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

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 25px;
  right: 25px;
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  background-size: 35%;
  border-radius: 50%;
  z-index: 2;
`;

const GridTemplate = ({ children, pageContext }) => (
  <PageTemplate>
    <StyledWrapper>
      <StyledPageHeader>
        <StyledHeading big as="h1">
          {pageContext}
        </StyledHeading>
        <Paragraph>6 {pageContext}</Paragraph>
        <StyledInput required activeColor={pageContext} search placeholder="search" />
      </StyledPageHeader>
      <StyledGridWrapper>{children}</StyledGridWrapper>
      <StyledButtonIcon icon={plusIcon} activeColor={pageContext} />
      <ContactBar />
    </StyledWrapper>
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
