import axios from 'axios'
import {prepareLocaleData} from './modules/common/tools/Internationalization'

export default () => {
    // axios.defaults.auth = {
    //     username: 'panel-management',
    //     password: 'yHA2qjNbr2MrV6s'
    // };
    prepareLocaleData()
}
