import React from 'react'
import ReactDOM from 'react-dom'
import HomePage from '../home'
import renderer from 'react-test-renderer'
import "@testing-library/jest-dom";
import { Provider } from 'react-redux';
import { store } from '../../redux/store';


it('home page render without crashing',
    () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <Provider store={store}>
                <HomePage />
            </Provider>
            , div)
    })


it("matches home page snapshot",
    () => {
        const tree = renderer.create(
            <Provider store={store}>
                <HomePage />
            </Provider>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })