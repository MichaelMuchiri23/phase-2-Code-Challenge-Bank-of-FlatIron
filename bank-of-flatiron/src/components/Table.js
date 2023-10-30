import React, {useEffect, useState} from "react";

function Table(){
    const [table, setTable] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:3000/transactions")
        .then((res) => res.json())
        .then((data) => {
            setTable(data)
            console.log(data)

        })
    }, [])

    const tableList = table.map((obj) => {
        return(
            <tr key={obj.id}>
                <th>{obj.id}</th>
                <th>{obj.date}</th>
                <th>{obj.description}</th>
                <th>{obj.category}</th>
                <th>{obj.amount}</th>
            </tr>
        )
    })
    return(
        <table className="nice">
            <tr>
                <th>id</th>
                <th>date</th>
                <th>description</th>
                <th>category</th>
                <th>amount</th>
            </tr>
            {tableList}
        </table>
    )
}

export default Table