import React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from './SectionHeader'
import SectionSubHeader from './SectionSubHeader'
import Member from './Member'
import {getPath} from '../../common/tools/URLTools'
import ScrollableAnchor from 'react-scrollable-anchor'

const Team = ({}) => {
    return (
        <ScrollableAnchor id={'about-us'}>
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
                        <br/>
                        <div className="row">
                            <div className="gr-12 center">
                                <SectionSubHeader
                                    title={'app.home.team.core.title'}
                                />
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <div className="row members">
                            <div className="gr-4 center gr-12@mobile gr-6@tablet">
                                <Member
                                    avatar={getPath('images/app/home/karel-striegel-avatar.jpg')}
                                    name={'Karel Striegel'}
                                    title={'app.home.team.karel.title'}
                                    text={'app.home.team.karel.text'}
                                />
                            </div>
                            <div className="gr-4 center gr-12@mobile gr-6@tablet">
                                <Member
                                    avatar={getPath('images/app/home/tim-dierckxsens-avatar.jpg')}
                                    name={'Tim Dierckxsens'}
                                    title={'app.home.team.tim.title'}
                                    text={'app.home.team.tim.text'}
                                />
                            </div>
                            <div className="gr-4 center gr-12@mobile gr-6@tablet">
                                <Member
                                    avatar={getPath('images/app/home/davy-van-roy-avatar.jpg')}
                                    name={'Davy Van Roy'}
                                    title={'app.home.team.davy.title'}
                                    text={'app.home.team.davy.text'}
                                />
                            </div>
                            <div className="gr-4 center gr-12@mobile gr-6@tablet">
                                <Member
                                    avatar={getPath('images/app/home/david-hantson-avatar.png')}
                                    name={'David Hantson'}
                                    title={'app.home.team.david.title'}
                                    text={'app.home.team.david.text'}
                                />
                            </div>
                            <div className="gr-4 center gr-12@mobile gr-6@tablet">
                                <Member
                                    avatar={getPath('images/app/home/quinten-de-swaef-avatar.jpg')}
                                    name={'Quinten De Swaef'}
                                    title={'app.home.team.quinten.title'}
                                    text={'app.home.team.quinten.text'}
                                />
                            </div>
                            <div className="gr-4 center gr-12@mobile gr-6@tablet">
                                <Member
                                    avatar={getPath('images/app/home/tom-degroote-avatar.jpg')}
                                    name={'Tom Degroote'}
                                    title={'app.home.team.tom.title'}
                                    text={'app.home.team.tom.text'}
                                />
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="gr-12 center">
                                <SectionSubHeader
                                    title={'app.home.team.advisors.title'}
                                />
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <div className="gr-4 center gr-12@mobile gr-6@tablet">
                            <Member
                                avatar={getPath('images/app/home/thomas-matthys-avatar.jpg')}
                                name={'Thomas Matthys'}
                                title={'app.home.team.thomas.title'}
                                text={'app.home.team.thomas.text'}
                            />
                        </div>
                        <div className="gr-4 center gr-12@mobile gr-6@tablet">
                            <Member
                                avatar={getPath('images/app/home/dndfisc-avatar.jpg')}
                                name={'D&D Fisc'}
                                title={'app.home.team.dndfisc.title'}
                                text={'app.home.team.dndfisc.text'}
                            />
                        </div>
                        <div className="gr-4 center gr-12@mobile gr-6@tablet">
                            <Member
                                avatar={getPath('images/app/home/portelio-avatar.jpg')}
                                name={'Portelio'}
                                title={'app.home.team.portelio.title'}
                                text={'app.home.team.portelio.text'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </ScrollableAnchor>
    )
}

Team.propTypes = {}

export default Team
