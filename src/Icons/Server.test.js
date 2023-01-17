import React from 'react';
import { render, screen } from '@testing-library/react';
import Server from './Server';

describe('src/Icons: Server', () => {
  it('Should render without props', () => {
    render(<Server />);
    const el = screen.getByTestId('Icons-Server');
    expect(el).not.toBeNull();
  });
});
