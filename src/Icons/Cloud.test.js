import React from 'react';
import { render, screen } from '@testing-library/react';
import Cloud from './Cloud';

describe('src/Icons: Cloud', () => {
  it('Should render without props', () => {
    render(<Cloud />);
    const el = screen.getByTestId('Icons-Cloud');
    expect(el).not.toBeNull();
  });
});
