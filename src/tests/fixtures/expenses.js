import moment from 'moment';

export const expenses = [{
    id:'1',
    description:'gum',
    note:'',
    amount: 500,
    createdAt:0
},
{
    id:'2',
    description:'rent',
    note:'',
    amount: 1000,
    createdAt:moment(0).subtract(4,'days').valueOf()
},
{
    id:'3',
    description:'credit card',
    note:'',
    amount: 4500,
    createdAt:moment(0).add(4,'days').valueOf()
},
];

export default expenses;
