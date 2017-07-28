import React, {Component} from 'react'
import BlockchainPage from '../components/BlockchainPage'
import {connect} from 'react-redux'
import ui from 'redux-ui'
// import ItemStore from '../../../../build/contracts/ItemStore.json'
// import Item from '../../../../build/contracts/Item.json'
import Blockchain from '../../common/tools/Blockchain'

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
    key: 'blockchain',
    state: {
        networkId : '',
        s10: '',
        status: ''
    }

})
@connect(
    mapStateToProps,
    mapDispatchToProps
)
export default class BlockchainContainer extends Component {

    createItem(event) {
        let s10 = this.props.ui.s10
        let blockchain = new Blockchain()

        // blockchain.getAccounts()
        //     .then(() => blockchain.getContractInstance(ItemStore))
        //     .then(() => blockchain.contractInstance.addItem(s10, {from: blockchain.account}))
        //     .then(() => blockchain.contractInstance.getItem.call(blockchain.account))
        //     .then((result) => {
        //         console.log(result)
        //         this.props.updateUI({
        //             s10: s10,
        //             status: result.c[0]
        //         })
        //     })
    }

    onS10Change(event){
        this.props.updateUI({
            s10: event.target.value
        })
    }

    render() {

        return (
            <BlockchainPage
                onS10Change={this.onS10Change.bind(this)}
                createItem={this.createItem.bind(this)}
                s10={this.props.ui.s10}
            />
        )
    }
}
