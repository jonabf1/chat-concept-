import React from 'react';
import { Container } from './styles';

export default function Base({ children }) {
  return (
    <Container>
      {children}
      <footer>
        <small>
          Made with love by{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/jonathan-barros-franco"
          >
            Jonathan
          </a>{' '}
        </small>
      </footer>
    </Container>
  );
}
