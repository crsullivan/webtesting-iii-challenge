// Test away!
import React from 'react';
import 'jest-dom/extend-expect';
import * as rtl from 'react-testing-library';
afterEach(rtl.cleanup)
import renderer from 'react-test-renderer';
import { render, fireEvent, wait } from '@testing-library/react';


import Display from './Display';

describe("Display", () => {
    it("renders correctly", () => {
         const tree = renderer.create(<Display />).toJSON();
         expect(tree).toMatchSnapshot();
    })
})

test('Shows open or closed', () => {
    const closedMock = jest.fn();
    const lockMock = jest.fn();
    const { getByText } = render(<Display closed={closedMock} locked={lockMock} />)

    expect(closedMock).toBeTruthy()
    expect(!closedMock).toBeFalsy()

    expect(lockMock).toBeTruthy()
    expect(!lockMock).toBeFalsy()

})

test('Shows LED', () => {
    const closedMock = jest.fn();
    const lockMock = jest.fn();
    const { queryByText } = render(<Display closed={closedMock} locked={lockMock} />)

    const closed = queryByText(/closed/i)
    expect(closed).toBeInTheDocument()
    expect(closed).toHaveClass('red-led')
    const unlock = queryByText(/locked/i)
    expect(unlock).toBeInTheDocument()
    expect(unlock).toHaveClass('red-led')


})