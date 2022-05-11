import React from 'react'
import ReactDOM from 'react-dom'
import LaunchStatusFilter from '../LaunchStatusFilter'
import renderer from 'react-test-renderer'
import "@testing-library/jest-dom";
import { Provider } from 'react-redux';
import { store } from '../../../redux/store'


it('launch status filter render without crashing',
    () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <Provider store={store}>
                <LaunchStatusFilter />
            </Provider>
            , div)
    })


it("matches launch status filter snapshot",
    () => {
        const tree = renderer.create(
            <Provider store={store}>
                <LaunchStatusFilter />
            </Provider>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })