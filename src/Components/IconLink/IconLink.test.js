import React from 'react';
import { render, screen } from '@testing-library/react';
import IconLink from './IconLink';

describe('src/Components/IconLink: IconLink', () => {
  it('Should render without props', () => {
    render(<IconLink />);
    const el = screen.getByTestId('Components-IconLink-Container');
    expect(el).not.toBeNull();
  });
});
