import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';

const DetailsTemplate = ({ children, pageType }) => (
  <PageTemplate pageType={pageType}>
    {children}
    <Link to="/">powrót</Link>
  </PageTemplate>
);

DetailsTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageType: PropTypes.oneOf(['notice', 'person', 'article']),
};

DetailsTemplate.defaultProps = {
  pageType: 'notice',
};

export default DetailsTemplate;
