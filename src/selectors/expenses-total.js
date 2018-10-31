

export default (expenses) => {
        const expensesAmounts = expenses.map( (expense) => expense.amount);
        return expensesAmounts.reduce( (sum, value) =>  sum + value ,0);
        // return expenses
        //     .map( (expense) => expense.amount)
        //     .reduce((sum,value) => sum + value, 0);
};