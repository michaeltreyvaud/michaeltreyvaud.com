import React from 'react';
import { render, screen } from '@testing-library/react';
import AWS from './AWS';

describe('src/Icons: AWS', () => {
  it('Should render without props', () => {
    render(<AWS />);
    const el = screen.getByTestId('Icons-AWS');
    expect(el).not.toBeNull();
  });
});
