import {default as commonConfig} from './common.json'
const environmentConfig = require('./' + process.env.NODE_ENV + '.json')

export const config = {
    ...commonConfig,
    ...environmentConfig
}