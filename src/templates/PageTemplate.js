import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const PageTemplate = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
    {children}
  </>
);

PageTemplate.propTypes = {
  children: PropTypes.string.isRequired,
  pageType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

PageTemplate.defaultProps = {
  pageType: 'note',
};

export default PageTemplate;
