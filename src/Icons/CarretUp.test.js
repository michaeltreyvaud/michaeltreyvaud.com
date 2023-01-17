import React from 'react';
import { render, screen } from '@testing-library/react';
import CarretUp from './CarretUp';

describe('src/Icons: CarretUp', () => {
  it('Should render without props', () => {
    render(<CarretUp />);
    const el = screen.getByTestId('Icons-CarretUp');
    expect(el).not.toBeNull();
  });
});
