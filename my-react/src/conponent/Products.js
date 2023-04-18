import React, { useEffect, useState } from 'react'

 export function Table() {

    const [products , setProducts] = useState ([]);
    const fetchProducts = () => {
        fetch('https://api.escuelajs.co/api/v1/categories')
        .then(res => res.json())
        .then(Response => setProducts(Response))
    }
    useEffect(() => {
       fetchProducts()
    },[])
  return (
   <>
   <table class="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Title Name</th>
        <th scope="col">creationAt</th>
        <th scope="col">updatedAt</th>
        <th scope="col">Images</th>
      </tr>
  
     
      {
         products.map(product => 
           <>
           <tr className="table-secondary">
           <th scope="row">{product.id}</th>
           <td>{product.name}</td>
           <td>{product.creationAt}</td>
           <td>{product.updatedAt}</td>
           <td>
              <img src={product.image} style={{width : '160px'}}/>
            </td>
           </tr>
           </>
          )}
   </thead>
 </table>
   </>
   )
}