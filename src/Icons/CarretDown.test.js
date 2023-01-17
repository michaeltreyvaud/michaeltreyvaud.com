import React from 'react';
import { render, screen } from '@testing-library/react';
import CarretDown from './CarretDown';

describe('src/Icons: CarretDown', () => {
  it('Should render without props', () => {
    render(<CarretDown />);
    const el = screen.getByTestId('Icons-CarretDown');
    expect(el).not.toBeNull();
  });
});
