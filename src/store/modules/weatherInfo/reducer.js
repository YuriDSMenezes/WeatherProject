import produce from 'immer';

const INITIAL_STATE = []

export default function weatherInfos(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'WEATHER_INFOS':
            return produce(state, draft => {
                draft.splice(...state)
                draft.push(action.weatherInfos)
        })
        default:
            return state
    }
}
