import React from 'react';
import { Link } from 'gatsby';

const Nav = ({ items }) => {
  return (
    <nav id="mobile-menu">
      <ul>
        {items.map(({ key, title, path }) => (
          <li key={key}>
            <Link to={path}>{title} +</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
