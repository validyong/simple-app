import React from 'react';
import { render, screen } from '@testing-library/react';
import Enzyme, { mount, shallow } from 'enzyme';
import { configure } from 'enzyme'
import ReactSeventeenAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ReactDOM from 'react-dom';
import App, { MyRoutes } from './App';
import { MemoryRouter } from 'react-router-dom';
import Welcome from './components/welcome/Welcome';
import Error from './components/error/Error';

configure({ adapter: new ReactSeventeenAdapter() })

it('renders without crashing', () => {
    const wrapper = shallow(<App/>);
})

it('invalid path should redirect to error component', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/random']}>
            <MyRoutes />
        </MemoryRouter>
    );
    expect(wrapper.find(Welcome)).toHaveLength(0);
    expect(wrapper.find(Error)).toHaveLength(1);
});

it('valid path shoult not redirect to Error', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/welcome']} initialIndex={0}>
            <MyRoutes/>
        </MemoryRouter>
    );
    expect(wrapper.find(Welcome)).toHaveLength(1);
    expect(wrapper.find(Error)).toHaveLength(0);
})
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

