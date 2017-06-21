import axios from 'axios'
import {prepareLocaleData} from './modules/common/tools/Internationalization'

const styleFixedNavigationOnScroll = () => {
    if(typeof window !== 'undefined') {
        let fixedHeaderClass = 'header-fixed'

        window.addEventListener('DOMContentLoaded', () => {
            window.addEventListener('scroll', (event) => {
                let scrollTop = document.body.scrollTop
                let header = document.getElementsByClassName('header')[0]

                if (scrollTop > 1) {
                    header.className += ' ' + fixedHeaderClass
                }
                if (scrollTop < 1) {
                    let cssClass = ' ' + header.className + ' '
                    let index = cssClass.indexOf(' ' + fixedHeaderClass + ' ')
                    if (index >= 0) {
                        header.className = cssClass.substr(0, index) + ' ' + cssClass.substr(index + fixedHeaderClass.length + 1)
                    }
                    header.classList.remove('header-fixed')
                }
            })
        })
    }
}

export default () => {
    // axios.defaults.auth = {
    //     username: 'panel-management',
    //     password: 'yHA2qjNbr2MrV6s'
    // };
    prepareLocaleData()
    styleFixedNavigationOnScroll()
}
