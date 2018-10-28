import {setStartDate, 
    setEndDate, 
    setTextFilter, 
    sortByAmount, 
    sortByDate} from '../../actions/filters';
import moment from 'moment';

test('should generate set start object',()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

test('should generate set end object',()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test ('should generate set text filter object with text', () => {
    const action = setTextFilter('abc');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text:'abc'
    });
});

test ('should generate set text filter object with default values', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text:''
    });
});

test('should return sort by amount object', ()=>{
    const action = sortByAmount();
    expect(action).toEqual({ type:'SORT_BY_AMOUNT'  });
});

test('should return sort by date object', () => {
    const action = sortByDate();
    expect(action).toEqual({ type: 'SORT_BY_DATE'  });
});


