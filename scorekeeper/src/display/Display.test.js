import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('The Display Component', () => {
  it('should render Display', () => {
    render(<Display/>);
    cleanup();
  })

  it('should display balls and strikes', () => {
    const { getByText } = render(<Display/>);
    getByText(/balls/i);
    getByText(/strikes/i);
    cleanup();
  })
})