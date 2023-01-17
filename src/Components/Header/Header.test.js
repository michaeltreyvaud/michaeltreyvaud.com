import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('src/Components/Header: Header', () => {
  it('Should render without props', () => {
    render(<Header />);
    const el = screen.getByTestId('Components-Header-Container');
    expect(el).not.toBeNull();
  });
});
