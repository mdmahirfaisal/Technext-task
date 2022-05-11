import React from 'react'
import ReactDOM from 'react-dom'
import Home from '../Home'
import renderer from 'react-test-renderer'
import "@testing-library/jest-dom";


it('Home render without crashing',
    () => {
        const div = document.createElement('div')
        ReactDOM.render(<Home />, div)
    })


it("matchs Home snapshot",
    () => {
        const tree = renderer.create(<Home />).toJSON()
        expect(tree).toMatchSnapshot()
    })