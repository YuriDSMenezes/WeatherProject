import produce from 'immer';
import { stat } from 'fs';

const INITIAL_STATE = []

export default function degreesInfos(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'DEGREES_INFOS':
            return produce(state, draft => {
                draft.splice(0,state.length,action.degrees)
            })
        default:
            return state
    }
}