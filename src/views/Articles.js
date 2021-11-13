import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import PageTemplate from 'templates/PageTemplate';
import Card from 'components/molecules/Card/Card';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';

const articles = [
  {
    id: 1,
    title: 'React on my mind',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://szalanski.eu',
    created: '1 day',
  },
  {
    id: 2,
    title: 'Wish you React',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://szalanski.eu/praktyka.php',
    created: '1 day',
  },
  {
    id: 3,
    title: 'You gave React a bad name',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://szalanski.eu/projekty.php',
    created: '5 days',
  },
  {
    id: 4,
    title: 'Is it React you looking for?',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://szalanski.eu/prywatnie.php',
    created: '10 days',
  },
];

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
      {articles.map(({ title, content, articleUrl, created, id }) => (
        <Card
          cardType="article"
          title={title}
          content={content}
          articleUrl={articleUrl}
          created={created}
          key={id}
        />
      ))}
    </StyledGridWrapper>
  </PageTemplate>
);

export default Articles;
