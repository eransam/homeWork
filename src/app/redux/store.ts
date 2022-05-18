import { combineReducers, createStore } from "redux";
import { authReducer } from "./auth-state";
import { employeesReducer } from "./employees-state";
import { productsReducer } from "./products-state";

// Creating reducers object from all our reducers: 
const reducers = combineReducers({ employeesState: employeesReducer,authState: authReducer,productsState: productsReducer,
});

// The most important Redux object: 
const store = createStore(reducers);

export default store;
