import { useState } from "react"

export function NewTodoForm(props){
  props.onSubmit
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e){
    e.preventDefault()

    if(newItem === "") return
    props.onSubmit(newItem)

    setNewItem("")
  }
  return (
    <form onSubmit = {handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input value = {newItem} type="text" id="item" onChange={e => setNewItem(e.target.value)}/>
    </div>
      <button className="btn">Add</button>
    </form>
  )
}