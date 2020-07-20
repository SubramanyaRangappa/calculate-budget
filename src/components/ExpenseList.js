import React from 'react';
import Item from './ExpenseItem'
import {MdDelete} from 'react-icons/md'

const ExpenseItem = ({expenses,handleEdit,handleDelete,clearItems}) => {
    return ( 
        <>
        <ul className="list">
            {
                expenses.map((expense)=>{
                    return <Item key={expense.id} expense = {expense}
                        handleEdit={handleEdit} handleDelete={handleDelete}
                    />
                })
            }
        </ul>
        {expenses.length > 0 && <button className="btn" onClick={clearItems}>Clear Response<MdDelete className="btn-icon" /></button>}
        </>
     );
}
 
export default ExpenseItem;