import React from 'react'
import ReactDOM from 'react-dom';
import {fireEvent, getByDisplayValue, within, getByText, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterResults from './FilterResults'

test('renders all text of filter results correctly', () => {
    const {getByLabelText} = render(<FilterResults/>);
    getByLabelText('filter');

})

test ('get results from filter', () => {
    const {getByLabelText} = render(<FilterResults />);
    const select = getByLabelText('filter');
})