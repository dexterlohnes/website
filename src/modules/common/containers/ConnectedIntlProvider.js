import {connect} from 'react-redux'
import {IntlProvider} from 'react-intl'

const mapStateToProps = (state) => {
    const {lang, messages} = state.global.locales
    return {
        locale: lang,
        messages
    }
}

export default connect(mapStateToProps)(IntlProvider)