import { legacy_createStore as createStore } from 'redux';

const counterReducer=(state={counter:0},action)=>{
    if (action.type==='incrementby2'){
        return{
            counter: state.counter + action.amount
        }
    }
    if (action.type==='decrementby2'){
        if (state.counter<=0){
            return {
                counter:0
            }
        }
        return {
            counter:state.counter-action.amount
        }
    }
    return state;
}

const store=createStore(counterReducer);

export default store;