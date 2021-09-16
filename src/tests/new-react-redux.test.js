import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import NewReactRedux from "../components/new-react-redux";
import {Provider} from 'react-redux';
import store from '../store';

describe('NewReactRedux', () => {
    let tree = null;
    beforeEach(() => {
        tree = renderer.create (<Provider store={store}>
            <NewReactRedux></NewReactRedux>
        </Provider>).toJSON();


    });
    it("can render initially", () => {
        expect(tree).toMatchSnapshot();
    })
});


// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
// render(<App />);
// const linkElement = screen.getByText(/learn react/i);
// expect(linkElement).toBeInTheDocument();
// });
