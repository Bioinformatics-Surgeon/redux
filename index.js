// Actions DESCRIBES! the only things that can change the state in the store.
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

/*
  ===== Pure Functions =====
Characteristics of a Pure Function
1) They always return the same output if recieving the same inputs
    - if I call this over and over they will return the same return 
2) They only depend on argumentss passed into them
    - the never need variables outside of them 
    - the reutrn is only depending on what is passed in
3) They never produce any side effects
    - no AJAX
    - no mutation of state
    - no messesing with DOM
*/

/*
Reducer
- must be a pure function 
- it will take in the current state of our store and return the new state based on the action that was passed in

-- the purpose of a reducer is to update that state based on an action occures

1) takes in current state
2) takes in specific action

3) returns the new state based on action 

-- this is sloved by using a PURE FUNCTION

important take aways:
1) the need to be pure
2) they need to return the next state of the store
3) they are responsible for setting the initial state of the store

*/

function todos(state = [], action) {
    if (action.type === 'ADD_TODO') {
        return state.concat([action.todo]);
    } else if (action.type === 'REMOVE_TODO') {
        return state.filter(todo => todo.id !== action.id);
    }

    return state;
}

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

    const dispatch = action => {
        // probably want to call out reducer todo function

        state = todos(state, action);
        // loop over all listeners and invoke them

        listeners.forEach(listener => listener());
    };

    return {
        // the way a users can get the state is by making a store and then calling the getState()
        getState,
        subscribe,
        dispatch
    };
}

// From a users stand point

const store = createStore();
store.dispatch({
    type: 'ADD_TODO',
    todo: {
        id: 0,
        name: 'Learn Redux',
        complete: false
    }
});
