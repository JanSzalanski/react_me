import React from 'react';
// import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import { Link } from 'react-router-dom';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';

const Sidebar = () => (
  <div>
    <p>Logo</p>
    <div>
      <ButtonIcon as={Link} to="/" icon={penIcon} />
      <ButtonIcon as={Link} to="/twitters" icon={twitterIcon} />
      <ButtonIcon as={Link} to="/articles" icon={bulbIcon} />
    </div>
    <ButtonIcon icon={logoutIcon} />
  </div>
);

export default Sidebar;
