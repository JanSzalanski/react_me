import React from 'react';
import image1 from 'assets/img/img.jpg';
import image2 from 'assets/img/img2.jpg';
import image3 from 'assets/img/img3.jpg';
import image4 from 'assets/img/img4.jpg';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

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

const People = () => (
  <GridTemplate pageType="people">
    {peoples.map(({ title, content, twitterName, created, id }) => (
      <Card
        id={id}
        cardType="people"
        title={title}
        content={content}
        twitterName={twitterName}
        created={created}
        key={id}
      />
    ))}
  </GridTemplate>
);

export default People;
