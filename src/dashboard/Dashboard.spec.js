// Test away
import React from 'react';
import 'jest-dom/extend-expect';
import * as rtl from 'react-testing-library';
afterEach(rtl.cleanup)
import renderer from 'react-test-renderer';
import { render, fireEvent, wait } from '@testing-library/react';


import Dashboard from './Dashboard';

describe("Dashboard", () => {
    it('renders correctly', () => {
         const tree = renderer.create(<Dashboard />).toJSON();
         expect(tree).toMatchSnapshot();
    })
})

test('Lock and Unlock display properly', () => {
    const { getByText } = render(
         <Dashboard />
    )
    fireEvent.click(getByText(/Close Gate/i));
    expect(getByText(/Closed/i))
    fireEvent.click(getByText(/Open Gate/i));
    expect(getByText(/Open/i))
})