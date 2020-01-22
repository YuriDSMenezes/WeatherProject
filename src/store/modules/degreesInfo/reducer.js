const INITIAL_STATE = []

export default function degreesInfos(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'DEGREES_INFOS':
            return [...state,action.weatherInfos]
        default:
            return state
    }
}
