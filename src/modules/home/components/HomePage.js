import React from 'react'
import noop from '../../common/tools/noop'

const HomePage = ({
                      storageValue,
                      inputValue,
                      onChangeInputValue = noop,
                      setStorageValue = noop,
                      onConnect = noop,
                      token = ''
                  }) => {
    return (
        <div>
            <h1>Home</h1>
            Dont forget to connect
            <p>The stored value is: {storageValue}</p>
            <input type="text" value={inputValue} onChange={onChangeInputValue}/>
            <button onClick={setStorageValue.bind(this,inputValue)}>Set Value</button>
            <button onClick={onConnect}>Connect</button>
            <p>Token: {token}</p>
        </div>
    )
}

export default HomePage
