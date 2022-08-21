import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../rootReducer/rootReducer';

// Create our First middleware 

const myLogger = (store) =>(next)=>(action)=>{
    // console.log(`Action: ${JSON.stringify(action)}`);
    // console.log(`Before: ${JSON.stringify(store.getState())}`);
    console.log(action)
    console.log(store.getState())

    const upcomingState = [action].reduce(rootReducer, store.getState());

    console.log('upcoming State: ',upcomingState)
    // pass action 
    return next(action)
}


const store = createStore(rootReducer,applyMiddleware(myLogger));
export default store;