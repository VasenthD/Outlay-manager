import { useEffect, useState } from 'react';
import './App.css';
// import ExpenseItem from "./component/Expense/Expense_Item/ExpenseItems";
import Expenses from './component/Expense/Expenses';
import NewExpenses from './component/New Expenses/NewExpenses';
import Counter from './counter';

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Groceries',
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  { id: 'e2', title: 'New Mobile', amount: 799.49, date: new Date(2020, 2, 12) },
  {
    id: 'e3',
    title: 'Car Repair',
    amount: 294.67,
    date: new Date(2021, 0, 28),
  },
  {
    id: 'e4',
    title: 'New work desk',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const[expenses , setExpenses] = useState(DUMMY_DATA)
  const [isLoadig,setLoading]=useState(true);

  // useEffect(()=>{
  //   fetch('https://localhost:3001/app/v1/expenses',{method:'GET'})
  //   .then(response=>response.json())
  //   .then(json=>{
  //     console.log(json);
  //     setExpenses(json);
  //     setLoading(false);
  //   })
  // },[]);

  const onAddExpense=(newValue)=> {
    setExpenses((prev)=>[newValue,...prev])
  }
  return (
    // <Counter/>
    <div className="App">
      <NewExpenses onAddExpense={onAddExpense}/>
      <Expenses expenses={expenses} isLoadig={true}/>
    </div>
  );
}

export default App;


