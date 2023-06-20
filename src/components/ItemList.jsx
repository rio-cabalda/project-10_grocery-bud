import SingleItem from "./SingleItem";


const ItemList = ({items,removeItem,editItem}) => {
    console.log(items);
  return (
    <div className="items">

        {items.length ? items.map((item)=>{
           
            return (
                <SingleItem  
                key={item.id} 
                {...item} 
                removeItem={removeItem}
                editItem={editItem}
                />
            );
        })
        : <h4>No Item</h4>
    } 

       
    </div>
  )
}

export default ItemList