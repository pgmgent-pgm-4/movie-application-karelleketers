import React from 'react'
import ReactDOM from 'react-dom';
import {fireEvent, getByDisplayValue, within, getByText, render, act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Filter from './Filter'

test('renders all text of filter form correctly', () => {
    const {getByLabelText} = render(<Filter/>);
    getByLabelText('filter');

})

test ('user can filter through movies or series', () => {
    const {getByLabelText} = render(<Filter />);
    const select = getByLabelText('filter');

    act(() => fireEvent.change(select));
})