import React from 'react';
import { render, screen } from '@testing-library/react';
import Sublist from './Sublist';

describe('src/Components/List: Sublist', () => {
  it('Should render without props', () => {
    render(<Sublist />);
    expect(() => screen.getByTestId('Components-Sublist-Container')).toThrow();
  });
});
