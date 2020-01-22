import produce from 'immer';

const INITIAL_STATE = []

export default function degreesInfos(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'DEGREES_INFOS':
            return produce(state, draft => {
                draft.splice(...state)
                draft.push(action.degrees)
            })
        default:
            return state
    }
}