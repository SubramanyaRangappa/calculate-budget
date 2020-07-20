import React, { useState, useEffect } from 'react';
import './App.css';
import {v4 as uuid} from "uuid"; 
import Alert from './components/Alert';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

// const initialExpenses = [
//   {id:uuid(), charge:'rent', amount:1600},
//   {id:uuid(), charge:'car payment', amount:400},
//   {id:uuid(), charge:'credit card bill', amount:1200}
// ]


const initialExpenses = localStorage.getItem('expenses') ? 
JSON.parse(localStorage.getItem('expenses')) : []

function App() {

  const [expenses, setExpenses] = useState(initialExpenses)
  const [charge, setCharge] = useState('')
  const [amount, setAmount] = useState('')
  const [edit, setEdit] = useState(false)
  const [id, setId] =useState(0)
  const [lengths, setLengths] = useState(0)
  

  

  useEffect(()=>{
    localStorage.setItem('expenses',JSON.stringify(expenses))
  },[expenses])
  
  const handleCharge = e => {
    setCharge(e.target.value)
  }

  const handleAmount = e => {
    setAmount(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(charge !=="" && amount > 0 ){
     if(edit){
       let tempExpenses = expenses.map(expese=>{
         return expese.id === id ? {...expese, charge, amount} : expese
       })
       setExpenses(tempExpenses)
       setEdit(false)
     } else {
      const singleExpenses = {id:uuid(), charge, amount}
      setExpenses([...expenses, singleExpenses])
     }
      setCharge('')
      setAmount('')
    }
  }

  const clearItems = () => {
    setExpenses([])
  }

  const handleDelete = (id) => {
    let tempExpenses = expenses.filter((expense)=>expense.id !== id)
    setExpenses(tempExpenses)
  }

  const handleLengths = () =>{
    setLengths(lengths + 1)
  }

  const handleLengthsDec = () =>{
    setLengths(lengths - 1)
  }

  const handleEdit = (id) => {
    let expense = expenses.find((expense)=>expense.id === id)
    const {charge,amount} = expense
    setCharge(charge)
    setAmount(amount)
    setEdit(true)
    setId(id)
  }

  return (
    <>
      <Alert />
      <h1>Budget Calculator</h1>
      <main>
      <ExpenseForm charge={charge} amount={amount} lengths={lengths} handleLengths={handleLengths} handleLengthsDec={handleLengthsDec}
      handleCharge={handleCharge} handleAmount={handleAmount} handleSubmit={handleSubmit} edit={edit} />
      <ExpenseList expenses={expenses} handleDelete={handleDelete} handleEdit={handleEdit} clearItems={clearItems} />
      <h1>Total Cost : 
      <span className="total">
      ${expenses.reduce((acc,curr)=>{
        return (acc+= parseInt(curr.amount))
      },0)}
      </span>
      </h1>
      </main>
    </>
  );
}

export default App;
