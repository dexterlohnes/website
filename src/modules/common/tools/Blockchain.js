export default class Blockchain {
    _web3 = null
    _accounts = []
    _activeContract = null
    _account = null
    _provider = null
    _contractInstance = null

    constructor(contract) {
        if (!!contract) this.activeContract = require('truffle-contract')(contract)
        this.web3 = web3
        this._provider = this.web3.currentProvider
    }

    getAccounts() {
        return new Promise((resolve, reject) => {
            this.web3.eth.getAccounts((error, accounts) => {
                if (error) return reject(error)
                this.accounts = accounts
                this.account = accounts[0]
                resolve(accounts)
            })
        })
    }

    getContractAPI(contractDefinition, provider = this.provider) {
        const contract = require('truffle-contract')
        const contractAPI = contract(contractDefinition)
        contractAPI.setProvider(provider)

        return contractAPI
    }

    getContractInstance(contractDefinition) {
        return new Promise((resolve, reject) => {
            this.getContractAPI(contractDefinition).deployed()
                .then((instance) => {
                    this.contractInstance = instance
                    resolve(instance)
                })
                .catch(reject)
        })
    }

    getInstance() {
        const provider = web3.currentProvider

        const contract = require('truffle-contract')
        this.activeContract = contract(contract)
        this.activeContract.setProvider(provider)

        const web3RPC = new Web3(provider)

        return new Promise((resolve, reject) => {
            this.getAccounts()
                .then()


            web3RPC.eth.getAccounts(this.onGetAccounts.bind(this))
                .then((instance) => {

                    resolve(instance)
                })
                .catch(reject)
        })
    }

    get accounts() {
        return this._accounts
    }

    set accounts(value) {
        this._accounts = value
    }

    get activeContract() {
        return this._activeContract
    }

    set activeContract(value) {
        this._activeContract = value
    }

    get account() {
        return this._account
    }

    set account(value) {
        this._account = value
    }

    get provider() {
        return this._provider
    }

    set provider(value) {
        this._provider = value
    }


    get contractInstance() {
        return this._contractInstance
    }

    set contractInstance(value) {
        this._contractInstance = value
    }
}
