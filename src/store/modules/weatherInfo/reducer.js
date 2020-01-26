import produce from 'immer';

const INITIAL_STATE = []

export default function weatherInfos(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'WEATHER_INFOS':
            return produce(state, draft => {
                draft.splice(0,state.length,action.weatherInfos)
        })
        default:
            return state
    }
}
