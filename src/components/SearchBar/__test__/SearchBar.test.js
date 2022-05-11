import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from '../SearchBar'
import renderer from 'react-test-renderer'
import "@testing-library/jest-dom";
import { Provider } from 'react-redux';
import { store } from '../../../redux/store'


it('search bar render without crashing',
    () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <Provider store={store}>
                <SearchBar />
            </Provider>
            , div)
    })


it("matches search bar snapshot",
    () => {
        const tree = renderer.create(
            <Provider store={store}>
                <SearchBar />
            </Provider>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })