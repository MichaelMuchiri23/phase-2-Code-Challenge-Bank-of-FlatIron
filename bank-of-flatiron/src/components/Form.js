import React from "react";

function Form(){
    return(
      <div className="div">
        <form id="forms">
            <label>id</label>
            <input type="text"></input>

            <label>date</label>
            <input></input>

            <label>description</label>
            <input type="text"></input>

            <label>category</label>
            <input type="text"></input>

            <label>amount</label>
            <input type="text"></input>
            
            <button className="but-ton"></button>

        </form>
      </div>
    )
}

export default Form