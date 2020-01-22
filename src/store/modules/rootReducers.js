import {combineReducers} from 'redux'

import weatherInfos from './weatherInfo/reducer'
import degreesInfo from './degreesInfo/reducer'
 
export default combineReducers({
weatherInfos,
degreesInfo
})
