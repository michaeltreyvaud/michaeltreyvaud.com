import React from 'react';
import { render, screen } from '@testing-library/react';
import Robot from './Robot';

describe('src/Icons: Robot', () => {
  it('Should render without props', () => {
    render(<Robot />);
    const el = screen.getByTestId('Icons-Robot');
    expect(el).not.toBeNull();
  });
});
