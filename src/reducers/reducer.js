export const reducer = (state = {}, action) => {

    console.log("de si maki?", action);
    console.log(state);
    switch (action.type) {
        case 'CHANGE_NAME':
            let name = action.name;
            return state = { ...state, name }
        default: return state;
    }
}
