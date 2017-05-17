import '../public/bower_components/array-find'
import Promise from 'promise-polyfill'
import {polyfillIntl} from './modules/common/tools/Internationalization'

polyfillIntl()

if (!window.Promise) {
    window.Promise = Promise
}