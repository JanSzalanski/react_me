/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const People = ({ people }) => (
  <GridTemplate pageType="people">
    {people.map(({ title, content, twitterName, created, id }) => (
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

People.propTypes = {
  people: PropTypes.shape({
    id: PropTypes.number.isRequired,
    cardType: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    twitterName: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
  }),
};

People.defaultProps = {
  people: {},
};

const mapStateToProps = state => {
  const { people } = state;
  return { people };
};

export default connect(mapStateToProps)(People);
