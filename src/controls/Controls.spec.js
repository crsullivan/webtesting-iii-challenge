// Test away!
import React from 'react';
// import 'jest-dom/extend-expect';
// import * as rtl from 'react-testing-library';
// afterEach(rtl.cleanup)
import renderer from 'react-test-renderer';

import Controls from './Controls';

describe('<Controls />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Controls />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});