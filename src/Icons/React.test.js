import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactIcon from './React';

describe('src/Icons: React', () => {
  it('Should render without props', () => {
    render(<ReactIcon />);
    const el = screen.getByTestId('Icons-React');
    expect(el).not.toBeNull();
  });
});
