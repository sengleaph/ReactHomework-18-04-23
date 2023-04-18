import React from 'react'

export function List({products}) {
  return (
   <ul>
    {
        products.map(products => 
        <>
        <li>{products.title}</li>
        
        </>
        )
    }
   </ul>
  )
}

export default List