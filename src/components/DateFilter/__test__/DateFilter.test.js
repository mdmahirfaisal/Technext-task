import React from 'react'
import ReactDOM from 'react-dom'
import DateFilter from '../DateFilter'
import renderer from 'react-test-renderer'
import "@testing-library/jest-dom";
import { Provider } from 'react-redux';
import { store } from '../../../redux/store'


it('date filter render without crashing',
    () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <Provider store={store}>
                <DateFilter />
            </Provider>
            , div)
    })


it("matches date filter snapshot",
    () => {
        const tree = renderer.create(
            <Provider store={store}>
                <DateFilter />
            </Provider>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })