import { useState } from "react";
import Form from "./components/Form";
import ItemList from "./components/ItemList";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//-------------------------LOCAL STORAGE SETUP
const localStorageData = JSON.parse(localStorage.getItem('list') || '[]'); 
//this line will get any data in the local storage that has a list name, if not it simply return array '[]'.

const setLocalStorage = (items) => { // this will put the new list of items into local storage.
  localStorage.setItem('list', JSON.stringify(items));
}
//-------------------------LOCAL STORAGE SETUP ABOVE ------------------
const App = () => {
  const [items, setItems] = useState(localStorageData);

  const addItem = (item) =>{

    const newItem = {
      name: item,
      completed: false,
      id: nanoid()
    }
    const newList = [...items, newItem];
    setItems(newList);
    setLocalStorage(newList);
    toast.success('Item successfully added');
  }

  const removeItem = (id) =>{
    const newList = items.filter((item)=> item.id !== id);
    setItems(newList);
    setLocalStorage(newList);
    toast.success('Item removed from the list');
  }

  const editItem = (id) => {
    const newList = items.map((item)=>{
      if(item.id === id){
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    
    setItems(newList);
    setLocalStorage(newList);
    console.log(items);
  }
  
  return (
    <section className="section-center">
        <ToastContainer position="top-center" />

        <Form addItem={addItem}/>
        <ItemList items={items} removeItem={removeItem} editItem={editItem}/>
        
    </section>
  );
};

export default App;
