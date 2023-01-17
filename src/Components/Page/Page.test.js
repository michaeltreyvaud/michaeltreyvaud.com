import React from 'react';
import { render, screen } from '@testing-library/react';
import Page from './Page';

describe('src/Components/Page: Page', () => {
  it('Should render without props', () => {
    render(<Page />);
    const el = screen.getByTestId('Components-Page-Container');
    expect(el).not.toBeNull();
  });
});
