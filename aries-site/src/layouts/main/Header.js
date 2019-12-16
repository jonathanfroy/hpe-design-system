import React from 'react';
import PropTypes from 'prop-types';

import { AnchorGroup, Nav } from 'aries-core';

export const Header = ({ showLinks }) => (
  <Nav title="Aries">
    {showLinks && (
      <AnchorGroup
        items={[
          { label: 'Start', href: '/start/about' },
          { label: 'Foundation', href: '/foundation/primer' },
          { label: 'Design', href: '/design/primer' },
          { label: 'Develop', href: '/develop/code' },
          { label: 'Resources', href: '/resources/examples' },
        ]}
      />
    )}
  </Nav>
);

Header.propTypes = {
  showLinks: PropTypes.bool,
};

Header.defaultProps = {
  showLinks: true,
};
