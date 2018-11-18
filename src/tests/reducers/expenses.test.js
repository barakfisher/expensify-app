import expensesReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import expensesReducer from '../../reducers/expenses';


test('should set default state', () =>{
    const state = expensesReducers(undefined,{type:'@@INIT'});
    expect(state).toEqual([]);
});

test('should remove by valid id', ()=>{
    const action = {type:'REMOVE_EXPENSE', id:expenses[1].id}
    const state = expensesReducers(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove if id not find', ()=>{
    const action = {type:'REMOVE_EXPENSE', id:'-1'}
    const state = expensesReducers(expenses,action);
    expect(state).toEqual(expenses);
});

test ('should add an expense', () => {
    const expense = {
        id:'123',
        description:'Laptop',
        note:'',
        createdAt:20000,
        amount:29500
    }
    const action = {type:'ADD_EXPENSE', expense};
    const state = expensesReducers(expenses,action);
    expect(state).toEqual([...expenses, expense]);
});

test ('should edit an expense', () => {
    const amount=122000;
    const action= {
        type: 'EDIT_EXPENSE', 
        id: expenses[1].id,
        updates: {
            amount
        }
    };
    const state = expensesReducers(expenses,action);
    expect(state[1].amount).toBe(122000);
});

test ('should edit not an expense if id not found', () => {
    const amount=1222000;
    const action= {
        type: 'EDIT_EXPENSE', 
        id: '-1',
        updates: {
            amount
        }
    };
    const state = expensesReducers(expenses,action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () =>{
    const action = {
        type: 'SET_EXPENSES',
        expenses: [            expenses[1]        ]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[1] ]);
})
