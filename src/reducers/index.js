/* eslint-disable no-console */
import image1 from 'assets/img/img.jpg';

const initialState = {
  people: [
    {
      id: 1,
      title: 'Mirek',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '1 day',
      twitterName: image1,
    },
  ],
  articles: [
    {
      id: 1,
      title: 'React on my mind',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      articleUrl: 'https://szalanski.eu',
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
  ],
};

const rootReducer = (state = initialState, action) => {
  console.log(action);
  console.log(state);
};

export default rootReducer;
