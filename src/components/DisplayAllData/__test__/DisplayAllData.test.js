import React from 'react'
import ReactDOM from 'react-dom'
import DisplayAllData from '../DisplayAllData'
import renderer from 'react-test-renderer'
import "@testing-library/jest-dom";
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';


it('display all data render without crashing',
    () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <Provider store={store}>
                <DisplayAllData />
            </Provider>
            , div)
    })


it("matches display all data snapshot",
    () => {
        const tree = renderer.create(
            <Provider store={store}>
                <DisplayAllData />
            </Provider>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })