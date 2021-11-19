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
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  pageType: PropTypes.oneOf(['news', 'people', 'articles']),
};

PageTemplate.defaultProps = {
  pageType: 'news',
};

export default PageTemplate;
