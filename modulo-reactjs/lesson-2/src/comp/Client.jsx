import React from 'react'

const listCustomer = [
    {
        id: 1,
        name: 'A',
        skills: ['a','b','c']
    },
    {
        id: 2,
        name: 'B',
        skills: ['d','e','f']
    },
    {
        id: 3,
        name: 'C',
        skills: ['g','h','f']
    }
]


export function Client() {
    const renderSkills = (skills, index) => {
        return (
            <div key={`skills-${index}`} style={{marginLeft:30}}>
                <li>{skills}</li>
            </div>
        )
    }

    const renderCustomer = (customer, index) => {
        return (
            <div key={`customer-${customer.id}`}>
                <li>{customer.name}</li>
                {customer.skills.map(renderSkills)}
            </div>
        )
    }

    return (
        <>
            <p>clientes</p>

            <ul>
                {listCustomer.map(renderCustomer)}
            </ul>
        </>
    )
}

