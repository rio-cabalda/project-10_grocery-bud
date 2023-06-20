import React, { useState } from 'react'

const SingleItem = ({name, id, completed, removeItem,editItem}) => {
    
     
  return (
    <div key={id} className="single-item">
        <input type="checkbox" 
        checked={completed}
            onChange={()=>editItem(id)}/>
        <p style={{textTransform: 'capitalize', textDecoration: completed && 'line-through'}}>{name}</p>
        <button type="button" className="btn remove-btn" 
        onClick={()=>{removeItem(id)}}>delete</button>
    </div>
  )
}

export default SingleItem