import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary'; 
// when testing there is no need for the connected component so we should import the named one or we will get the "Invariant Violation problem" 


test('should render few expenses summery currectly', () =>{
    const wrapper = shallow(<ExpensesSummary expenseCount={3} expensesTotal={29000}/>)
    expect(wrapper).toMatchSnapshot();
});

test('should render one expense summery currectly', () =>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={29000}/>)
    expect(wrapper).toMatchSnapshot();
});