import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 480px;
  height: 100vh;
  padding: 50px 25px;
  background-color: ${({ theme }) => theme.maingrey};
  z-index: 1;
  display: flex;
  flex-direction: column;
  border-left: 3px solid
    ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.maingrey)};
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 100px;
  border-radius: 20px;
  height: 30vh;
`;

const ContactBar = ({ pageContext }) => (
  <div>
    <StyledWrapper activeColor={pageContext}>
      <Heading big>Kontakt</Heading>
      <Input activeColor={pageContext} placeholder="title" />
      <StyledTextArea activeColor={pageContext} as="textarea" placeholder="title" />
      <Button activeColor={pageContext}>Wyślij</Button>
    </StyledWrapper>
  </div>
);

ContactBar.propTypes = {
  pageContext: PropTypes.oneOf(['news', 'people', 'articles']),
};

ContactBar.defaultProps = {
  pageContext: 'news',
};

export default withContext(ContactBar);
