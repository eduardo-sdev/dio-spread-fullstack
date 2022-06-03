import React from 'react'
import ReactDOM from 'react-dom'

import {BtnA, BtnB} from './comp/Btn'
import {Client} from './comp/Client'

const view = true

const App = () => {
    const renderAdd = (<button disabled>render button</button>)

    return (
        <>
            {view && <BtnA title={'button a'} /> }
            {
                view ? (renderAdd) : (
                    <BtnB title={'button b'} />
                )
            }

            <Client />
        </>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

