import React,{useState} from "react";

function Table({table}){
    const[locate, setLocate]=useState("")

    const tableList = table.filter((item)=>{
        return locate.toLowerCase() === ""?
        item:item.description.toLowerCase().includes(locate)
    }).map((obj) => {
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
      <>
        <form className="search">
          <input type="search" placeholder="search" onChange={(e)=>setLocate(e.target.value)}/>
        </form>
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
      </>
    )
}

export default Table