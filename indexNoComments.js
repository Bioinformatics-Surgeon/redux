// Library
function createStore(reducer) {
    let state;
    let listeners = [];

    const getState = () => state;

    const subscribe = listener => {
        listeners.push(listener);
        return () => (listeners = listeners.filter(l => l !== listener));
    };

    const dispatch = action => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    return {
        getState,
        subscribe,
        dispatch
    };
}

// App Code
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';

// Action Creators
function addTodoAction(todo) {
    return {
        type: ADD_TODO,
        todo
    };
}
function removeTodoAction(id) {
    return {
        type: REMOVE_TODO,
        id
    };
}
function toggleTodoAction(id) {
    return {
        type: TOGGLE_TODO,
        id
    };
}

function addGoalAction(goal) {
    return {
        type: ADD_GOAL,
        goal
    };
}
function removeGoalAction(id) {
    return {
        type: REMOVE_GOAL,
        id
    };
}

// Reducer Functions
function app(state = {}, action) {
    return {
        todos: todos(state.todos, action),
        goals: goals(state.goals, action)
    };
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat([action.todo]);
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.id);
        case TOGGLE_TODO:
            return state.map(todo =>
                todo.id !== action.id
                    ? todo
                    : Object.assign({}, todo, { complete: !todo.complete })
            );
        default:
            return state;
    }
}

function goals(state = [], action) {
    switch (action.type) {
        case ADD_GOAL:
            return state.concat([action.goal]);
        case REMOVE_GOAL:
            return state.filter(goal => goal.id !== action.id);
        default:
            return state;
    }
}

// Test
const store = createStore(app);
store.subscribe(() => {
    console.log('The new state is: ', store.getState());
});

store.dispatch(
    addTodoAction({
        id: 0,
        namcoe: 'Learn Redux',
        complete: false
    })
);
store.dispatch(
    addTodoAction({
        id: 1,
        name: 'Work Hard',
        complete: false
    })
);
store.dispatch(
    addTodoAction({
        id: 2,
        name: 'Take Nap',
        complete: false
    })
);

store.dispatch(toggleTodoAction(2));

store.dispatch(removeTodoAction(1));
