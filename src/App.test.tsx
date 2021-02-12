import React from 'react';
import { render, screen } from '@testing-library/react';
import Enzyme, { mount, shallow } from 'enzyme';
import { configure } from 'enzyme'
import ReactSeventeenAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ReactDOM from 'react-dom';
import App from './App';
import { MemoryRouter } from 'react-router';


it('invalid path should redirect to error component', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/gagogago']}>
            <App />
        </MemoryRouter>
    );
    expect(wrapper.find(Error)).toHaveLength(0);
});
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

