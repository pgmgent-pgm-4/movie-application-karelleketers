import React from 'react'
import ReactDOM from 'react-dom';
import {fireEvent, getByDisplayValue, within, getByText, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar'

test('renders all text of search form correctly', () => {
    const {getByLabelText} = render(<SearchBar/>);
    getByLabelText('search');

})

test ('user can search for movie or series', () => {
    const {getByLabelText} = render(<SearchBar />);
    const input = getByLabelText('search');

    fireEvent.change(input);
    fireEvent.keyPress(input);
})