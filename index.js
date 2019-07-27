// Actions DESCRIBE! the only things that can change the state in the store
// - we only have to specifiy the actions TYPE; everything else is whatever we want

const actionAddTodo = {
    type: 'ADD_TODO',
    todo: {
        id: 0,
        name: 'Learn Redux',
        complete: false
    }
};

const actionRemoveTodo = {
    type: 'REMOVE_TODO',
    id: 0
};
const actionToggleTodo = {
    type: 'TOGGLE_TODO',
    id: 0
};

const actionAddGoal = {
    type: 'ADD_GOAL',
    goal: {
        id: 0,
        name: 'Run a Marathon'
    }
};
const actionRemoveGoal = {
    type: 'REMOVE_GOAL',
    id: 0
};
const actionToggleGoal = {
    type: 'TOGGLE_GOAL',
    id: 0
};

function createStore() {
    // The Store should have four parts:
    // Public facing API for our Store is the following:
    // you can interact with the state by invoking one of the following methods
    // 1. The state
    // 2. Get state.
    // 3. Listen to changes on the state
    // 4. Update the state

    // the above invocaiton will give us the store!

    let state;

    let listeners = [];

    const getState = () => state;

    const subscribe = listener => {
        listeners.push(listener);
        return () => (listeners = listeners.filter(l => l !== listener));
    };

    return {
        // the way a users can get the state is by making a store and then calling the getState()
        getState,
        subscribe
    };
}
