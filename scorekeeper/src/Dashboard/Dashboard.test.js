import React from 'react';
import { render, cleanup, fireEvent, getAllByTestId } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('The Dashboard Component', () => {
  // test for render component
  it('should render Dashboard', () => {
    render(<Dashboard/>);
    cleanup();
  })

})