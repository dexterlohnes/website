import React from 'react'
import Introduction from './Introduction'
import WhatIs from './WhatIs'
import Steps from './Steps'
import Values from './Values'
import Goals from './Goals'
import Roadmap from './Roadmap'
import Team from './Team'
import {defaultLanguage} from '../../common/tools/Internationalization'

const HomePage = ({ language = defaultLanguage }) => {
    return (
        <div className="home">
            <Introduction
                language={language}
            />
            <WhatIs />
            <Steps />
            <Values />
            <Goals />
            <Roadmap />
            <Team />
        </div>
    )
}

export default HomePage
