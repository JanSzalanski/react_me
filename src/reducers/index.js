/* eslint-disable no-console */
import image1 from 'assets/img/img.jpg';
import image2 from 'assets/img/img2.jpg';
import image3 from 'assets/img/img3.jpg';
import image4 from 'assets/img/img4.jpg';

const initialState = {
  people: [
    {
      id: 1,
      title: 'Miro',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animitempore esse adipisci, dolore odit anim',
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
  ],
  articles: [
    {
      id: 1,
      title: 'React on my mind2',
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
  ],
  news: [
    {
      id: 1,
      title: 'Wake me up when Vue ends',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '1 day',
    },
    {
      id: 2,
      title: 'Como es An Gular?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '1 day',
    },
    {
      id: 3,
      title: 'Du bist Reactish',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '5 days',
    },
  ],
};

// eslint-disable-next-line no-unused-vars
const rootReducer = (state = initialState, action) => {
  return state;
};

export default rootReducer;
