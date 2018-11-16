import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startAddExpense, addExpense, editExpense, removeExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

// for async process pass the done parameter and invoke it at the end else will not wait
test ('Should add expense to Database and store', (done) => {    
    const store = createMockStore({});
        console.log("ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",  store);
        const expenseData = {
            description: 'Mouse',
            amount: 3000,
            note:'This one is better',
            createdAt:1000
        }

        store.dispatch(startAddExpense(expenseData)).then(() =>{ 
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type:'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseData
                }
            });
            return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        }).then( (snapshot) =>{
            expect((snapshot).val()).toEqual(expenseData);
        });
        done();
});

test ('Should add expense with default values to Database and store', (done) => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: '',
        amount: 0,
        note:'',
        createdAt:0
    }

    store.dispatch(startAddExpense(expenseDefaults)).then(() =>{ 
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then( (snapshot) =>{
        expect((snapshot).val()).toEqual(expenseDefaults);
        done();
    });
    
});


// test ('should set up addExpense action object with default values', () =>{
//     const action = startAddExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense:{
//             id: expect.any(String),
//             note:'',
//             createdAt:0,
//             description:'',
//             amount:0
            
//         }
//     })
// })