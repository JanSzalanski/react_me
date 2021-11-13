import React from 'react';
import styled from 'styled-components';
import image1 from 'assets/img/img.jpg';
import image2 from 'assets/img/img2.jpg';
import image3 from 'assets/img/img3.jpg';
import image4 from 'assets/img/img4.jpg';
import PageTemplate from 'templates/PageTemplate';
import Card from 'components/molecules/Card/Card';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';

const peoples = [
  {
    id: 1,
    title: 'Mirek',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
    twitterName: image1,
  },
  {
    id: 2,
    title: 'Bartek',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
    twitterName: image2,
  },
  {
    id: 3,
    title: 'Romek',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '5 days',
    twitterName: image3,
  },
  {
    id: 4,
    title: 'Piotr',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '10 days',
    twitterName: image4,
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
      {peoples.map(({ title, content, twitterName, created, id }) => (
        <Card
          cardType="people"
          title={title}
          content={content}
          twitterName={twitterName}
          created={created}
          key={id}
        />
      ))}
    </StyledGridWrapper>
  </PageTemplate>
);

export default People;
