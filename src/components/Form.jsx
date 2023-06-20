import { useState } from "react";
import { toast } from "react-toastify";


const Form = ({addItem}) => {
    const [newItemName,setNewItemName] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!newItemName) return toast.error('Please provide a value')
        addItem(newItemName);
        setNewItemName('')
    }

  return (
        <form onSubmit={handleSubmit}>
            <h4>Grocery buds</h4>
            <div className="form-control">
                <input type="text" className="form-input" 
                value={newItemName}
                onChange={(e)=>setNewItemName(e.target.value)}
                />
                <button type="submit" className="btn">add item</button>
            </div>
        </form>
  )
}

export default Form;