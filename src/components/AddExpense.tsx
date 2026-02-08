import React, { useState } from "react";

interface AddExpenseProps {
    onAddExpense: (amount: number) => void;
}

export default function AddExpense({ onAddExpense }: AddExpenseProps){

    const [amount,setAmount] = useState(0);

    function submitExpenseHandler(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        console.log("submit btn clicked");
        
        if (amount > 0) {
            onAddExpense(amount);
            setAmount(0);
        }
    }

    function changeHandler(e:React.ChangeEvent<HTMLInputElement>){
        setAmount(Number(e.target.value))
    }

    return (
        <>
        <h2>Add Expense</h2>

        <form onSubmit={submitExpenseHandler}>
            <input type="number" placeholder="Type Amount" value={amount} onChange={changeHandler}/>
            <button type="submit">Add</button>
        </form>

        </>
    )
}