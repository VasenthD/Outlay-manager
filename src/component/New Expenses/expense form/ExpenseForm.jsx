import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm =(props)=>{

    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState(0);
    const [enteredDate,setEnteredDate]=useState('');

    const onTitleChange=(event)=>setEnteredTitle(event.target.value);
    const onAmountChange=(event)=>setEnteredAmount(event.target.value);
    const onDateChange=(event)=>setEnteredDate(event.target.value);


    const onExpenseSubmit=(event)=>{
        event.preventDefault();
        console.log('call from Form',enteredTitle,enteredAmount,enteredDate);
        const new_expense={
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
            id: Math.random().toString(),
        }
        if(enteredTitle)
        props.onSave(new_expense);
        else
        console.log('Values Not Entered')
    };

    return (
        <form onSubmit={onExpenseSubmit}>
        <div className="new-expense__controls">
            {/* Title */}
            <div className="new-expense__control">
                <label  htmlFor="title">Title</label>
                <input  
                    type="text" 
                    name="title" 
                    id="title"
                    value={enteredTitle}
                    onChange={onTitleChange}
                />
            </div>
            {/* Amount */}
            <div className="new-expense__control">
                <label  htmlFor="amount">Amount</label>
                <input  
                    type="number" 
                    name="Amount" 
                    id="Amount" 
                    min="0"
                    value={enteredAmount}
                    onChange={onAmountChange}
                />
               
            </div>
            {/* Date */}
            <div className="new-expense__control">
                <label  htmlFor="date">Date</label>
                <input  
                    type="date" 
                    name="date" 
                    id="date"
                    value={enteredDate}
                    onChange={onDateChange}
                />
            </div>
        
        </div>
        <div>
            <button className="new-expense__actions">Cancel</button>
            <button type="submit" className="new-expense__actions">Add Expense</button>
        </div>
    </form>
    )
};

export default ExpenseForm;