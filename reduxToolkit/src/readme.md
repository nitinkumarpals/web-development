# Redux Toolkit

### Store

1. One store in the entire application
   a. A store is configured using `configureStore({})` and is an object which
      has many reducers
   b. When a reducer is introduced, it is added to the store as a key-value pair
2. Each feature as a folder named features
  a. `createSlice` is used to create a slice of state and reducers
     associated with it. It takes in 3 arguments.
     1. `name`: name of the slice of state
     2. `initialState`: initial value of the slice of state
     3. `reducers`: an object with key-pair values where key is the name of
        the reducer and value is the reducer function itself. This reducer will
        be called with two arguments, state and action. The action has a
        property called `payload` which has the data which was passed as an
        argument to the action creator.

     
