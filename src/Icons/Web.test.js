import React from 'react';
import { render, screen } from '@testing-library/react';
import Web from './Web';

describe('src/Icons: Web', () => {
  it('Should render without props', () => {
    render(<Web />);
    const el = screen.getByTestId('Icons-Web');
    expect(el).not.toBeNull();
  });
});
