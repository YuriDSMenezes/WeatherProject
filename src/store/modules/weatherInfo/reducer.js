const INITIAL_STATE = []

export default function weatherInfos(state = INITIAL_STATE, action) {
      console.log(state)
    switch (action.type) {
        case 'WEATHER_INFOS':
            return [...state,action.weatherInfos]
        default:
            return state
    }
}
