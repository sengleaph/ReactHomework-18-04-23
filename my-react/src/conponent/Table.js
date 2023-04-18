import React, { useEffect, useState } from 'react'

 export function Table() {

    const [products , setProducts] = useState ([]);
    const fetchProducts = () => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json())
        .then(Response => setProducts(Response))
    }
    useEffect(() => {
       fetchProducts()
    },[])
  return (
   <>
   <table className="table">
   <thead>
     <tr className="table-primary">
       <th scope="col">ID</th>
       
       <th scope="col">Title Name</th>
       <th scope="col">creationAt</th>
       <th scope="col">updatedAt</th>
       <th scope="col">Images</th>
     </tr>
   </thead>
   <tbody>
     
      {
         products.map(product => 
           <>
           <tr className="table-secondary">
           <th scope="row">{product.id}</th>
           <td>{product.title}</td>
           <td>{product.creationAt}</td>
           <td>{product.price}</td>
           <td> <img src={product.images} alt='pic' style={{width : '150px' , borderRadius : '20px'}}/></td>
           </tr>
           </>
          )}
   </tbody>
 </table>
   </>
   )
}