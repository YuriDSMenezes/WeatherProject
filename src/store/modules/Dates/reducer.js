export default function date(state = [], action) {
    console.log(state)
    switch (action.type) {
        case 'Share_Date':
        return [...state, action.dates];
        default: 
        return state;
    }
}