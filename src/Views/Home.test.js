import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('src/Views/Home: Home', () => {
  it('Should render without props', () => {
    render(<Home />);
    const el = screen.getByTestId('Home-View-Container');
    expect(el).not.toBeNull();
  });
});
