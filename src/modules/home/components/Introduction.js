import React from 'react'
import PropTypes from 'prop-types'
import {FormattedMessage} from 'react-intl'
import Button, {ButtonTypes} from '../../common/components/Button'

const Introduction = ({}) => {
    return (
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
    )
}

Introduction.propTypes = {}

export default Introduction