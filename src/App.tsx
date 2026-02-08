import { useEffect, useState } from "react";
import AddExpense from "./components/AddExpense";
import Expenses from "./components/Expenses";

export default function App(){
    const [expenses, setExpenses] = useState<number[]>([]);

    useEffect(() => {
        const expensesJSON = localStorage.getItem("expenses");
        if (expensesJSON) {
            setExpenses(JSON.parse(expensesJSON));
        } 
        
    }, []);

    const handleAddExpense = (amount: number) => {
        const updatedExpenses = [...expenses, amount];
        setExpenses(updatedExpenses);
        localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
    };

    return(
        <>
        <h1>Expense Tracker</h1>
        <AddExpense onAddExpense={handleAddExpense}/>
        <Expenses expenses={expenses}/>
        </>
    )
}

