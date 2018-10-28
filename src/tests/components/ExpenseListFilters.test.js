import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(()=>{
    setTextFilter=jest.fn();
    sortByDate=jest.fn();
    sortByAmount=jest.fn();
    setStartDate=jest.fn();
    setEndDate=jest.fn();
    wrapper = shallow(<ExpenseListFilters 
        filters={filters}
        setTextFilter={setTextFilter} 
        sortByDate={sortByDate} 
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
         />);
});

test('should render the ExpenseList filters', ()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should render the ExpenseList filters with alt data', ()=>{
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change',()=>{
    const textValue= 'blah';
    wrapper.find('input').simulate('change',{
        target: {
            value: {textValue}
        }
    });    
    expect(setTextFilter).toHaveBeenLastCalledWith({textValue})
});

test('should sort by date', ()=>{
    const value = 'date';

    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    const sortValue = 'amount';
    wrapper.find('select').simulate('change', {
        target :{
            value: sortValue
        }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', ()=>{
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);

});

test('should handle date focus changes', () =>{
    const calenderFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calenderFocused);
    expect(wrapper.state('calenderFocused')).toBe(calenderFocused);
});
