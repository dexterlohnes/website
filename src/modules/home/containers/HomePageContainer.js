import React, {Component} from 'react'
import HomePage from '../components/HomePage'
import SimpleStorageContract from '../../../../build/contracts/SimpleStorage.json'
import Web3 from 'web3'
import {connect} from 'react-redux'
import ui from 'redux-ui'

export const mapStateToProps = (state) => {
    return {

    }
}

export const mapDispatchToProps = (dispatch) => {
    // return bindActionCreators({
    // }, dispatch)
    return {}
}

@ui({
    key: 'home',
    persist: false,
    state: {
        storageValue: 0,
        inputValue: 0
    }
})
@connect(
    mapStateToProps,
    mapDispatchToProps
)
export default class HomePageContainer extends Component {

    setStorageValue(value) {
        let self = this

        const provider = new Web3.providers.HttpProvider('http://localhost:8545')
        const contract = require('truffle-contract')
        const simpleStorage = contract(SimpleStorageContract)
        simpleStorage.setProvider(provider)

        // Get Web3 so we can get our accounts.
        const web3RPC = new Web3(provider)

        let simpleStorageInstance

        web3RPC.eth.getAccounts(function(error, accounts) {
            console.log(accounts)

            simpleStorage.deployed().then(function(instance) {
                simpleStorageInstance = instance

                // Stores a value of 5.
                return simpleStorageInstance.set(value, {from: accounts[0]})
            }).then(function(result) {
                // Get the value from the contract to prove it worked.
                return simpleStorageInstance.get.call(accounts[0])
            }).then(function(result) {
                // Update state with the result.
                self.props.updateUI({ storageValue: result.c[0] })
            })
        })
    }

    onChangeInputValue(event) {
        this.props.updateUI({
            inputValue: event.target.value
        })
    }

    onConnect(){
        //https://mvp-b-dev.fundrequest.io/requests
        console.log('connect here')
    }


    render() {
        return (
            <HomePage
                storageValue={this.props.ui.storageValue}
                inputValue={this.props.ui.inputValue}
                setStorageValue={this.setStorageValue.bind(this)}
                onChangeInputValue={this.onChangeInputValue.bind(this)}
                onConnect={this.onConnect.bind(this)}
            />
        )
    }
}
