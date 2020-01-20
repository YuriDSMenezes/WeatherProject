const INITIAL_STATE = []

export default function weatherInfos(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'WEATHER_INFOS':
            return [action.weatherInfos]
        default:
            return state
    }
}
