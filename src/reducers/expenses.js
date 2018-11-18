

//expenses reducer:
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) =>{
    switch (action.type){
        case 'ADD_EXPENSE':
            // return state.concat(action.expense); // will not work with push we must avoid changing the state
            return [
                ...state,
                action.expense
            ]; 
        case 'REMOVE_EXPENSE':
            return state.filter( ({id}) =>  id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) =>{
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    };
                }else {
                    return expense;
                }
            });
        case 'SET_EXPENSES':
            return action.expenses;
        default:    
            return state;
        }
};

export default expensesReducer;