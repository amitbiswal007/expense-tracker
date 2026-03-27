interface ExpensesProps {
    expenses: number[];
}

export default function Expenses({ expenses }: ExpensesProps) {

    return (
        <>
            <h2>Expenses</h2>
            <table>
                <thead>
                    <tr>
                        <th>
                            S.No.
                        </th>
                        <th>
                            Transaction Type
                        </th>
                        <th>
                            Amount
                        </th>
                        <th>
                            Action
                        </th>
                    </tr></thead>
                <tbody>

                    {expenses.map(expense => {
                        return (
                            <>
                                <tr>
                                    <td>{expenses.indexOf(expense) + 1}</td>
                                    <td>Expense</td>
                                    <td>${expense}</td>
                                    <td>
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}