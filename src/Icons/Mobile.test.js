import React from 'react';
import { render, screen } from '@testing-library/react';
import Mobile from './Mobile';

describe('src/Icons: Mobile', () => {
  it('Should render without props', () => {
    render(<Mobile />);
    const el = screen.getByTestId('Icons-Mobile');
    expect(el).not.toBeNull();
  });
});
