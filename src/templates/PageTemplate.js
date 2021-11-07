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
  children: PropTypes.string.isRequired,
  pageType: PropTypes.oneOf(['note', 'people', 'article']),
};

PageTemplate.defaultProps = {
  pageType: 'note',
};

export default PageTemplate;
