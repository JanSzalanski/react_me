/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const News = ({ news }) => (
  <GridTemplate pageType="news">
    {news.map(({ title, content, created, id }) => (
      <Card id={id} cardType="news" title={title} content={content} created={created} key={id} />
    ))}
  </GridTemplate>
);

News.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      cardType: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

News.defaultProps = {
  news: [],
};

const mapStateToProps = state => {
  const { news } = state;
  return { news };
};

export default connect(mapStateToProps)(News);
