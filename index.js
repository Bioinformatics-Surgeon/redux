function createStore() {
  // The Store should have four parts:
  // 1. The state
  // Public facing API for our Store is the following:
  // you can interact with the state by involing on of the following methods below
  // 2. Get state.
  // 3. Listen to changes on the state
  // 4. Update the state

  let state


  const getState = () => state

  return {
    // the way a users can get the state is by making a store and then calling the getState()
    getState
  }

}