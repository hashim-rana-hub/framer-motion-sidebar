import React from 'react'

const Message = () => {

 const [fruitarray, setFruitArray]= React.useState('')
 const [id, setId]= React.useState('')
 const [array, setArray] = React.useState([])
const handleSubmit  = () =>{
    let obj = {fruitarray , id : Math.ceil(Math.random()*100)}
   setArray([...array, obj])
   console.log("obj" , obj);
}
const handleEdit = (id) => {}

const handleDelete = (id) => {}
  return (
    <div>
   <div>
      <input type = "text" value={fruitarray} onChange={(e)=> setFruitArray(e.target.value)}/>
      <input type = "hidden" value={id} onChange={(e)=> setId(e.target.value)}/>      
      <button onClick={handleSubmit}>Add Fruit</button>
   </div>
   {
       array?.map((item, index) => {
           return (
               <>
               <div style={{display: "flex"}}>
                  <p>{item.fruitarray}</p>
                  <button onClick={(e) => handleEdit(item.id)}>Edit</button>
                  <button onClick={(e) => handleDelete(item.id)}>Delete</button>
                  </div>
                </>
           )
       })
   }
    </div>
  )
}

export default Message