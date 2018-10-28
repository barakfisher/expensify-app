import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import filtersReducer from '../reducers/filters';


    const ExpenseDashboardPage = () => (
        <div>
            <ExpenseListFilters/>
            <ExpenseList/>
        </div>   
    );

export default ExpenseDashboardPage;

