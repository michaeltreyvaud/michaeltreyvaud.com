import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

describe('src/Views/Home: Home', () => {
  it('Should render without props', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const el = screen.getByTestId('Home-View-Container');
    expect(el).not.toBeNull();
  });
});
