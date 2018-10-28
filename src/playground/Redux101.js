import {createStore} from 'redux';

//Action generators - fuinction that returnm action objectsmediumPrice
const add = ( {a, b}, c ) => (a + b)+ c;
console.log(add( { a:1, b:12 }, 100 ));


const incrementCount = ( {incrementBy = 1} = {}) =>({    
        type : 'INCREMENT',
        incrementBy: incrementBy
});

const decrementCount = ( {decrementBy = 1}= {} ) =>({
    type:'DECREMENT',
    decrementBy: decrementBy
});

const setCount = ({count}) => ({
    type:'SET',
    count:count
});

const resetCount = () => ({
    type:'RESET'
});

// reducers 
const countReducer = ((state= { count:0 }, action) => {
    switch (action.type){
        case 'INCREMENT':
            return {
                count : state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
            case 'SET':
            return {
                count:action.count
            }
        default:
            return state;
    }
    
    console.log('1');
    return state;
});

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() =>{ //will run every time the store changes
    console.log(store.getState());       
});


//  action object + call
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// store.dispatch({
//     type: 'RESET' 
// });
store.dispatch(resetCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount( {decrementBy:10} ));

store.dispatch( setCount( {count:102} ) );


store.dispatch({
    type: 'SET',
    count:101
});

unsubscribe();    // the return value of subscirbe is the unsubscirbe function

// Actions = an object sent to the store


