import React from 'react'
import ReactDOM from 'react-dom'
import IsUpcomingFilter from '../IsUpcomingFilter'
import renderer from 'react-test-renderer'
import "@testing-library/jest-dom";
import { Provider } from 'react-redux';
import { store } from '../../../redux/store'


it('is upcoming filter render without crashing',
    () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <Provider store={store}>
                <IsUpcomingFilter />
            </Provider>
            , div)
    })


it("matches is upcoming filter snapshot",
    () => {
        const tree = renderer.create(
            <Provider store={store}>
                <IsUpcomingFilter />
            </Provider>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })