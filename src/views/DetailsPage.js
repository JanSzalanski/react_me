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
    const { pageType } = this.state;

    return (
      <DetailsTemplates pageType={pageType}>
        <p>{pageType}</p>
      </DetailsTemplates>
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.string.isRequired,
};

export default DetailsPage;
