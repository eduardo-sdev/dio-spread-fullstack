import React from 'react'

export const App = () => {
    const name = 'reactjs'

    const showEvent = (e) => {
        console.log(' hello ');

        console.log(e);

        console.log(name);
    }

    const Btn = <button onClick={showEvent}>Butão</button>

    const handleChange = (e) => {
        const { value } = e.target
        console.log(value)
    }
    const numbers = [1, 2, 3, 4, 5]; const listItems = numbers.map((number) =>  <li>{number}</li> );

    return (
        <>
            <input onClick={handleChange}/>

            {numbers}

            {Btn}

        </>
    )
}

