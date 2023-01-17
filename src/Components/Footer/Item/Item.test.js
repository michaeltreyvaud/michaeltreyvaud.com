import React from 'react';
import { render, screen } from '@testing-library/react';
import Item from './Item';

describe('src/Components/Footer: Item', () => {
  it('Should render without props', () => {
    render(<Item />);
    const el = screen.getByTestId('Components-Footer-Item-Container');
    expect(el).not.toBeNull();
  });
});
