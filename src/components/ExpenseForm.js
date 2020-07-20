import React from 'react';
import { MdSend, MdArrowForward, MdArrowBack } from 'react-icons/md';

const ExpenseForm = ({charge,amount,handleAmount,handleCharge,handleSubmit,edit,lengths,handleLengths,handleLengthsDec }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-center">
                {lengths === 0 &&
               <div className="form-group">
                    <label htmlFor="charge">charge</label>
                    <input type="text" name="charge" className="form-control" placeholder="Eg:Rent"
                        value={charge} onChange={handleCharge}
                    />
                    <button style={{float:"right"}}><MdArrowForward className="btn-icon" onClick={handleLengths} /></button>
                </div> }

               {lengths===1 && <div className="form-group">
                    <label htmlFor="amount">amount</label>
                    <input type="number" name="amount"  className="form-control" placeholder="Eg:100"
                        value={amount} onChange={handleAmount}
                    />
                    <button style={{float:"left"}}><MdArrowBack className="btn-icon" onClick={handleLengthsDec} /></button>
                    <button style={{float:"right"}}><MdArrowForward className="btn-icon" onClick={handleLengths} /></button>
                
                </div> }

                {/* {lengths===2 && <div className="form-group">
                    <label htmlFor="amount">fee</label>
                    <input type="number" name="amount"  className="form-control" placeholder="fee"
                        value={amount} onChange={handleAmount}
                    />
                    <button style={{float:"left"}}><MdArrowBack className="btn-icon" onClick={handleLengthsDec} /></button>
                
                </div> } */}
           
           
                
            </div>
            <button type="submit" className="btn">{edit ? 'edit' : 'submit'}<MdSend className="btn-icon" /></button>
        </form>
    );
}

export default ExpenseForm;