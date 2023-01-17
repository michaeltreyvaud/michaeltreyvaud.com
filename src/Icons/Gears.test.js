import React from 'react';
import { render, screen } from '@testing-library/react';
import Gears from './Gears';

describe('src/Icons: Gears', () => {
  it('Should render without props', () => {
    render(<Gears />);
    const el = screen.getByTestId('Icons-Gears');
    expect(el).not.toBeNull();
  });
});
