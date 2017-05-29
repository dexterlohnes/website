import React from 'react'
import Introduction from './Introduction'
import Steps from './Steps'
import Values from './Values'
import Goals from './Goals'
import Team from './Team'
import {defaultLanguage} from '../../common/tools/Internationalization'

const HomePage = ({ language = defaultLanguage }) => {
    return (
        <div className="home">
            <Introduction
                language={language}
            />
            <Steps />
            <Values />
            <Goals />
            <Team />
        </div>
    )
}

export default HomePage
