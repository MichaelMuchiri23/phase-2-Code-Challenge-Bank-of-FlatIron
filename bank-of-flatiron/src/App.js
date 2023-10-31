import React, {useState, useEffect} from "react";
import Table from "./components/Table";
import Header from "./components/Header";
import Form from "./components/Form";


function App() {
  const [formData, setFormData] = useState({
    id: "",
    date: "",
    description: "",
    category: "",
    amount: ""
  })

  const [table, setTable] = useState([])
    
  useEffect(() => {
      fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((data) => {
          setTable(data)
      })
  }, [])
  
  function update(formData){
    const updatedTable = [...table, formData]
    setTable(updatedTable)
  }


  return(
  <div>
    <Header />
    <Table table={table} setTable={setTable} />
    <Form update={update} formData={formData} setFormData={setFormData} />
  </div>
  )
}

export default App;
