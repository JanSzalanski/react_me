import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
// import Image from 'assets/img/img.jpg';
import LinkIcon from 'assets/icons/link.svg';

const StyledWrapper = styled.div`
  margin-top: 25px;
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.5);
  border-radius: 8px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) =>
    activeColor ? theme[activeColor] : theme.maingrey};
  border-bottom: 2px solid
    ${({ activeColor, theme }) => (activeColor ? theme[`${activeColor}Dark`] : theme.note)};

  :first-of-type {
    z-index: 1;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      border-bottom: none;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const ParagraphCard = styled(Paragraph)`
  color: white;
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
  color: black;
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 7px solid ${({ theme }) => theme.maingrey};
  position: absolute;
  right: 20px;
  top: 20px;
  border-radius: 50px;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border: 3px solid #373737;
  border-radius: 50%;
  background: white url(${LinkIcon}) no-repeat;
  background-size: 60%;
  background-position: 50%;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`;

const Card = ({ cardType, title, created, twitterName, articleUrl, content }) => (
  <StyledWrapper>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading>{title}</StyledHeading>
      <DateInfo>{created}</DateInfo>
      {cardType === 'people' && <StyledAvatar src={twitterName} />}
      {cardType === 'article' && <StyledLinkButton href={articleUrl} />}
    </InnerWrapper>
    <InnerWrapper flex>
      <ParagraphCard>{content}</ParagraphCard>
      <Button secondary>Remove</Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'people', 'article']),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Card.defaultProps = {
  cardType: 'note',
  twitterName: 'twitter',
  articleUrl: 'https://szalanski.eu/',
};

export default Card;
