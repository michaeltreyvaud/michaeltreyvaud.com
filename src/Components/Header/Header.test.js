import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';

describe('src/Components/Header: Header', () => {
  it('Should render without props', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const el = screen.getByTestId('Components-Header-Container');
    expect(el).not.toBeNull();
  });
});
