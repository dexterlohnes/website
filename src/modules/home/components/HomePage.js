import React from 'react'
import Introduction from './Introduction'
import Steps from './Steps'
import Values from './Values'
import Goals from './Goals'
import Team from './Team'

const HomePage = ({}) => {
    return (
        <div className="home">
            <Introduction />
            <Steps />
            <Values />
            <Goals />
            <Team />
        </div>
    )
}

export default HomePage
