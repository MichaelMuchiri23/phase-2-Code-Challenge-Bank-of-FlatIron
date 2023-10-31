import React from "react";

function Form({update, formData, setFormData}){


  function handleSubmit(e){
    e.preventDefault()

    const inputData = {
      id:formData.id,
      date:formData.date,
      description:formData.description,
      category:formData.category,
      amount:formData.amount
    }
    
    fetch("http://localhost:3000/transactions", {
      method:"POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body:JSON.stringify(inputData)
    })
    .then(res => res.json())
    .then(data => update(data))

    setFormData({
      id: "",
    date: "",
    description: "",
    category: "",
    amount: ""
    })
    
  }
  
  return(
      <div className="div">
        <form id="forms" onSubmit={handleSubmit}>
            <label>id</label>
            <input type="text" value={formData.id} onChange={(e) => setFormData({...formData, id: e.target.value})}></input>

            <label>date</label>
            <input type="text" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})}></input>

            <label>description</label>
            <input type="text" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})}></input>

            <label>category</label>
            <input type="text" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}></input>

            <label>amount</label>
            <input type="text" value={formData.amount} onChange={(e) => setFormData({...formData, amount: e.target.value})}></input>
            
            <input type="submit"></input>

        </form>
      </div>
    )
}

export default Form