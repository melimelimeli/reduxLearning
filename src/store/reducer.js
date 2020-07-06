const defaultState = {
    inputValue: 'Write something',
    list: [
        '早8点开晨会',
        '早10点开晨会1',
        '早12点开晨会2'
    ]
};

export default (state = defaultState, action) => {
    console.log(state);
    console.log(action);
    
    //reducer里面只能接受state,不能改变state
    if (action.type === 'changeInput') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if (action.type === 'addItem') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }

    if(action.type==='deleteItem') {
        let newState = JSON.parse(JSON.stringify(state));
        console.log(newState);
        newState.list.splice(action.index,1);
        return newState;
    }
    return state;
}