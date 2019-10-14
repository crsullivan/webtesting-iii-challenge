// Test away
import React from 'react';
// import 'jest-dom/extend-expect';
// import * as rtl from 'react-testing-library';
// afterEach(rtl.cleanup)
import renderer from 'react-test-renderer';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Dashboard />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});