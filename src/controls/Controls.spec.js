// Test away!
import React from 'react';
import 'jest-dom/extend-expect';
import * as rtl from 'react-testing-library';
afterEach(rtl.cleanup)
import renderer from 'react-test-renderer';
import { render, fireEvent, wait } from '@testing-library/react';
import Controls from './Controls';

describe('Controls', () => {
     it('renders correctly', () => {
          const wrapper = rtl.render(<Controls />)
          expect(wrapper.baseElement).toMatchSnapshot();
     })
})

test('Check for closing and locking', () => {
    const lockMock = jest.fn();
    const closedMock = jest.fn();
    const { getByText } = render(<Controls toggleLocked={lockMock} toggleClosed={closedMock} />)
    fireEvent.click(getByText(/unlock gate|lock gate/i));
    fireEvent.click(getByText(/open gate|close gate/i));

})

