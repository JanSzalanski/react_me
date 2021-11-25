import React, { Component } from 'react';
import { routes } from 'routes';
import PropTypes from 'prop-types';
import DetailsTemplates from '../templates/DetailsTemplates';

class DetailsPage extends Component {
  state = {
    pageType: 'news',
  };

  componentDidMount() {
    // eslint-disable-next-line default-case

    const { match } = this.props;

    switch (match.path) {
      case routes.person:
        this.setState({ pageType: 'people' });
        break;
      case routes.notice:
        this.setState({ pageType: 'news' });
        break;
      case routes.article:
        this.setState({ pageType: 'articles' });
        break;
      default:
        // eslint-disable-next-line no-console
        console.log('Something went wrong with matching paths');
    }
  }

  render() {
    const dummyArticle = {
      id: 1,
      title: 'Wake me upwhen Vue ends',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      twitterName: 'Mirek Z',
      articleUrl: 'https://szalanski.eu',
      created: '2 day',
    };
    const { pageType } = this.state;

    return (
      <DetailsTemplates
        pageType={pageType}
        title={dummyArticle.title}
        created={dummyArticle.created}
        content={dummyArticle.content}
        articleUrl={dummyArticle.articleUrl}
        twitterName={dummyArticle.twitterName}
      />
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default DetailsPage;
