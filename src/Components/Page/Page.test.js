import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Page from './Page';

describe('src/Components/Page: Page', () => {
  it('Should render without props', () => {
    render(
      <BrowserRouter>
        <Page />
      </BrowserRouter>,
    );
    const el = screen.getByTestId('Components-Page-Container');
    expect(el).not.toBeNull();
  });
});
