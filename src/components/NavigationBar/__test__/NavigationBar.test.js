import React from 'react'
import ReactDOM from 'react-dom'
import NavigationBar from '../NavigationBar'
import renderer from 'react-test-renderer'
import "@testing-library/jest-dom";


it('navigation bar render without crashing',
    () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <NavigationBar />
            , div)
    })


it("matches navigation bar snapshot",
    () => {
        const tree = renderer.create(
            <NavigationBar />
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })