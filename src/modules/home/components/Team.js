import React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from './SectionHeader'
import Member from './Member'
import {getPath} from '../../common/tools/URLTools'

const Team = ({}) => {
    return (
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
                    <br/>
                    <div className="row">
                        <div className="gr-6 center">
                            <Member
                                avatar={getPath('images/app/home/karel-striegel-avatar.jpg')}
                                name={'Karel Striegel'}
                                title={'app.home.team.karel.title'}
                                text={'app.home.team.karel.text'}
                            />
                        </div>
                        <div className="gr-6 center">
                            <Member
                                avatar={getPath('images/app/home/tim-dierckxsens-avatar.jpg')}
                                name={'Tim Dierckxsens'}
                                title={'app.home.team.tim.title'}
                                text={'app.home.team.tim.text'}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="gr-6 center">
                            <Member
                                avatar={getPath('images/app/home/davy-van-roy-avatar.jpg')}
                                name={'Davy Van Roy'}
                                title={'app.home.team.davy.title'}
                                text={'app.home.team.davy.text'}
                            />
                        </div>
                        <div className="gr-6 center">
                            <Member
                                avatar={getPath('images/app/home/david-hantson-avatar.png')}
                                name={'David Hantson'}
                                title={'app.home.team.david.title'}
                                text={'app.home.team.david.text'}
                            />
                        </div>
                        <div className="gr-6 center">
                            <Member
                                avatar={getPath('images/app/home/quinten-de-swaef.jpg')}
                                name={'Quinten De Swaef'}
                                title={'app.home.team.quinten.title'}
                                text={'app.home.team.quinten.text'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Team.propTypes = {}

export default Team
