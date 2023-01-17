import React from 'react';
import { render, screen } from '@testing-library/react';
import List from './List';

describe('src/Components/List: List', () => {
  it('Should render without props', () => {
    render(<List />);
    const el = screen.getByTestId('Components-List-Container');
    expect(el).not.toBeNull();
  });
});
