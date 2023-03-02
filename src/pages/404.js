import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import useSiteMetadata from 'hooks/use-site-metadata';

const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
};

const Menu = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    margin-right: 1rem;
  }
`;

const NotFoundPage = () => {
  const { menu } = useSiteMetadata();

  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Извините 😔, данной страницы не существует либо она перенесена.
        <br />
        {process.env.NODE_ENV === 'development' ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>
            .
            <br />
          </>
        ) : null}
        <br />
        <Menu>
          {menu.map(({ key, title, path }) => (
            <li key={key}>
              <Link to={path}>
                {title}
                {'+'}
              </Link>
            </li>
          ))}
        </Menu>
      </p>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
