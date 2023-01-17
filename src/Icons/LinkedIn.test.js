import React from 'react';
import { render, screen } from '@testing-library/react';
import LinkedIn from './LinkedIn';

describe('src/Icons: LinkedIn', () => {
  it('Should render without props', () => {
    render(<LinkedIn />);
    const el = screen.getByTestId('Icons-LinkedIn');
    expect(el).not.toBeNull();
  });
});
