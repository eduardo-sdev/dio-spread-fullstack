import React from 'react'
import ReactDOM from 'react-dom'

import {Btn} from './comp/Btn'

function Sum(a, b) {
    return a + b
}

function First() {
    return (
        <>
            soma: {Sum(10000, 2000)}
            hello world
        </>

    )
}

const App = () => {
    return (
        <>
            {First()}
            <Btn title={'button'} onClick={() => alert('button onclick')}/>
        </>
    )
}


const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

