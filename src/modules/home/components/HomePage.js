import React from 'react'
import {FormattedMessage} from 'react-intl'
import Button, {ButtonTypes} from '../../common/components/Button'
import SectionHeader from './SectionHeader'

const HomePage = ({}) => {
    return (
        <div className="home">
            <div className="introduction section">
                <div className="content">
                    <div className="gr-container">
                        <div className="row">
                            <div className="gr-12 center">
                                <FormattedMessage
                                    id="app.home.introduction.title"
                                    tagName={'h1'}
                                />
                                <FormattedMessage
                                    id="app.home.introduction.intro"
                                    tagName={'h3'}
                                />
                                <br/>
                                <Button text={'app.home.introduction.get-started'}
                                        onClick={() => {
                                        }}
                                        styleType={ButtonTypes.HOT}
                                        className={'crowdsale-button'}
                                />
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="steps section">
                <div className="content">
                    <div className="gr-container">
                        <div className="row">
                            <div className="gr-12 center">
                                <SectionHeader
                                    title={'app.home.steps.title'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="values section">
                <div className="content">
                    <div className="gr-container">
                        <div className="row">
                            <div className="gr-12 center">
                                <SectionHeader
                                    title={'app.home.values.title'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="goals section">
                <div className="content">
                    <div className="gr-container">
                        <div className="row">
                            <div className="gr-12 center">
                                <SectionHeader
                                    title={'app.home.goals.title'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team section">
                <div className="content">
                    <div className="gr-container">
                        <div className="row">
                            <div className="gr-12 center">
                                <SectionHeader
                                    title={'app.home.team.title'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage
