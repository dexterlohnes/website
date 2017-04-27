import React, {Component, PropTypes} from 'react'
import HomePage from '../components/HomePage'
import SimpleStorageContract from '../../../../build/contracts/SimpleStorage.json'
import Web3 from 'web3'
import {connect} from 'react-redux'
import ui from 'redux-ui'
import AuthService from '../../common/tools/AuthService'
import Blockchain from '../../common/tools/Blockchain'

export const mapStateToProps = (state) => {
    return {}
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
    static propTypes = {
        auth: PropTypes.instanceOf(AuthService)
    }

    setStorageValue(value) {
        let blockchain = new Blockchain()

        blockchain.getAccounts()
            .then(() => blockchain.getContractInstance(SimpleStorageContract))
            .then(() => blockchain.contractInstance.set(value, {from: blockchain.account}))
            .then(() => blockchain.contractInstance.get.call(blockchain.account))
            .then((result) => {
                this.props.updateUI({
                    storageValue: result.c[0]
                })
            })
    }

    onChangeInputValue(event) {
        this.props.updateUI({
            inputValue: event.target.value
        })
    }

    onConnect() {
        //https://mvp-b-dev.fundrequest.io/requests
        console.log('connect here')
    }


    render() {
        const {auth} = this.props

        return (
            <HomePage
                storageValue={this.props.ui.storageValue}
                inputValue={this.props.ui.inputValue}
                setStorageValue={this.setStorageValue.bind(this)}
                onChangeInputValue={this.onChangeInputValue.bind(this)}
                onConnect={this.onConnect.bind(this)}
                token={auth.getToken()}
            />
        )
    }
}
