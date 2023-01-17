import React from 'react';
import { render, screen } from '@testing-library/react';
import GitHub from './GitHub';

describe('src/Icons: GitHub', () => {
  it('Should render without props', () => {
    render(<GitHub />);
    const el = screen.getByTestId('Icons-GitHub');
    expect(el).not.toBeNull();
  });
});
