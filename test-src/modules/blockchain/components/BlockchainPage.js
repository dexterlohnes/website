import React from 'react'
import noop from '../../common/tools/noop'

const BlockchainPage = ({onS10Change = noop,
                        s10 = '',
                        createItem = noop}) => {
    return (
        <div>
            <h1>Blockchain</h1>
            <input type="text" onChange={onS10Change} value={s10}/>
            <button onClick={createItem}>Create</button>
        </div>
    )
}

export default BlockchainPage
