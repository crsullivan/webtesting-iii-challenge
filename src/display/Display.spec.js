// Test away!
import React from 'react';
// import 'jest-dom/extend-expect';
// import * as rtl from 'react-testing-library';
// afterEach(rtl.cleanup)
import renderer from 'react-test-renderer';

import Display from './Display';

describe('<Display />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Display />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});