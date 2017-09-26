import React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from './SectionHeader'
import SectionSubHeader from './SectionSubHeader'
import Member from './Member'
import {getPath} from '../../common/tools/URLTools'
import Scroll from 'react-scroll'

const Team = ({}) => {
    return (
        <Scroll.Element name="about-us" className="team section">
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
                                    avatar={getPath('images/app/home/gerbert-vandenberghe-avatar.jpg')}
                                    name={'Gerbert Vandenberghe'}
                                    title={'app.home.team.gerbert.title'}
                                    text={'app.home.team.gerbert.text'}
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
                                    avatar={getPath('images/app/home/steve-maris-avatar.jpg')}
                                    name={'Steve Maris'}
                                    title={'app.home.team.steve.title'}
                                    text={'app.home.team.steve.text'}
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
                              avatar={getPath('images/app/home/christopher-heymann.jpg')}
                              name={'Christopher Heymann'}
                              title={'app.home.team.christopher.title'}
                              text={'app.home.team.christopher.text'}
                            />
                        </div>
                        <div className="gr-4 center gr-12@mobile gr-6@tablet">
                            <Member
                                avatar={getPath('images/app/home/nico-haelterman-avatar.jpg')}
                                name={'Nico Haelterman'}
                                title={'app.home.team.nico.title'}
                                text={'app.home.team.nico.text'}
                            />
                        </div>
                        <div className="gr-6 center gr-12@mobile gr-6@tablet">
                            <Member
                                avatar={getPath('images/app/home/nakrin-narula-avatar.jpg')}
                                name={'Nakrin Narula'}
                                title={'app.home.team.nakrin.title'}
                                text={'app.home.team.nakrin.text'}
                            />
                        </div>
                        <div className="gr-6 center gr-12@mobile gr-6@tablet">
                            <Member
                              avatar={getPath('images/app/home/lasse-clausen.jpg')}
                              name={'Lasse Clausen'}
                              title={'app.home.team.lasse.title'}
                              text={'app.home.team.lasse.text'}
                            />
                        </div>
                        <div className="gr-6 center gr-12@mobile gr-6@tablet">
                            <Member
                                avatar={getPath('images/app/home/dndfisc-avatar.jpg')}
                                name={'D&D Fisc'}
                                title={'app.home.team.dndfisc.title'}
                                text={'app.home.team.dndfisc.text'}
                            />
                        </div>
                        <div className="gr-6 center gr-12@mobile gr-6@tablet">
                            <Member
                                avatar={getPath('images/app/home/pwc-avatar.jpg')}
                                name={'PwC'}
                                title={'app.home.team.pwc.title'}
                                text={'app.home.team.pwc.text'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Scroll.Element>
    )
}

Team.propTypes = {}

export default Team
