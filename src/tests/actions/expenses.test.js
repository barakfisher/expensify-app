import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should set up remove expense action object', () =>{
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id:'123abc'
    });
});

test ('should set up the edit expense action object' , () =>{
    const action = editExpense('123', {note:'hello'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id:'123',
        updates:{
            note:'hello'
        }
    });
    
});

test ('should set up addExpense action objct with provided values', () =>{
    const expenseData ={
        description: 'rent',
        amount:109500,
        createdAt:1000,
        note:'last month rent'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test ('should set up addExpense action object with default values', () =>{
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            id: expect.any(String),
            note:'',
            createdAt:0,
            description:'',
            amount:0
            
        }
    })
})