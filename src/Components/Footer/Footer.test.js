import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('src/Components/Footer: Footer', () => {
  it('Should render without props', () => {
    render(<Footer />);
    const el = screen.getByTestId('Components-Footer-Container');
    expect(el).not.toBeNull();
  });
});
