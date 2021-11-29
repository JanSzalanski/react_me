import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import withContext from 'hoc/withContext';

const StyledHeading = styled(Heading)`
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.light};
  font-size: ${({ theme }) => theme.fontSize.l};
`;

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
  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.35s ease-in-out;
`;

const StyledInput = styled(Input)`
  font-family: 'Montserrat', sans-serif;
  margin-top: 15px;
`;

const StyledTextArea = styled(Input)`
  font-family: 'Montserrat', sans-serif;
  margin: 30px 0 100px;
  border-radius: 20px;
  height: 30vh;
  resize: none;
`;

const ContactBar = ({ pageContext, isVisible }) => (
  <div>
    <StyledWrapper isVisible={isVisible} activeColor={pageContext}>
      <StyledHeading big>Kontakt</StyledHeading>
      <StyledInput activeColor={pageContext} placeholder="imię i nazwisko *" />
      <StyledInput activeColor={pageContext} placeholder="e-mail *" />
      <StyledInput activeColor={pageContext} placeholder="temat" />
      <StyledTextArea activeColor={pageContext} as="textarea" placeholder="treść wiadomości *" />
      <Button activeColor={pageContext}>Wyślij</Button>
    </StyledWrapper>
  </div>
);

ContactBar.propTypes = {
  pageContext: PropTypes.oneOf(['news', 'people', 'articles']),
  isVisible: PropTypes.bool,
};

ContactBar.defaultProps = {
  pageContext: 'news',
  isVisible: false,
};

export default withContext(ContactBar);
