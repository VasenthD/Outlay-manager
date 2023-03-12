import React,{useState} from "react"
import './ExpenseItem.css';
import ExpenseDate from "../Expense_Date/ExpenseDate";
/*const ExpenseItem=()=>{
    
    return (
        <div className="expense-item">
            <div className="date">2023-10-01</div>
            <div className="expense-item__description">
                <h2>New Tv</h2>
                <div className="expense-item__price">
                    $99
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem;*/

/*const ExpenseItem=()=>{

    const date=new Date(2023,2,3).toISOString();
    const title ="New Tv";
    const amount='99';
    console.log(date);

    return (
        <div className="expense-item">
            <div className="date">{date}</div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">
                    ${amount}
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem;
*/

const ExpenseItem=(props)=>{

    /*const{ date=new Date(),
        title='No Request',
          amount=0
         }=props;
    console.log(props);*/

    const [date,setDate]=useState(props.date)//[title,setTitle]
    const [title,setTitle]=useState(props.title)//[title,setTitle]
    const [amount,setAmount]=useState(props.amount)//[title,setTitle]
    console.log({date,title,amount});

    function OnClickChange (event){
        console.log('PrintExpenseItem');
        setTitle("Updated");
        setDate(new Date());
        setAmount(0);
    }

    return (
        <div className="expense-item">
             <ExpenseDate date={date}/>
            
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">
                    ${amount}
                </div>
            </div>
            {/* <button onClick={OnClickChange}></button> */}
        </div>
    )
}

export default ExpenseItem;


