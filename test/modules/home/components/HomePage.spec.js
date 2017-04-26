import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import {stub} from 'sinon'
import HomePage from '../../../../src/modules/home/components/HomePage'

describe('Scenario: render <HomePage />', () => {

    describe('Given I have a HomePage, ', () => {

        let Component
        let props = {
        }

        describe('When homepage is rendered it', () => {

            beforeEach(() => {
                props.onChangeInputValue = stub()
                props.setStorageValue = stub()
                props.onConnect = stub()
                Component = shallow(<HomePage {...props}/>)
            })

            it('should render', () => {
                expect(Component).to.exist
            })

        })
    })
})