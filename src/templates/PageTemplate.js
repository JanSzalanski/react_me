import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const PageTemplate = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
    {children}
  </>
);

PageTemplate.propTypes = {
  children: PropTypes.array.isRequired,
  pageType: PropTypes.oneOf(['news', 'people', 'article']),
};

PageTemplate.defaultProps = {
  pageType: 'news',
};

export default PageTemplate;
