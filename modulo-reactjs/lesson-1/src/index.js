import React from 'react'
import ReactDOM from 'react-dom'

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
        </>
    )
}


const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

