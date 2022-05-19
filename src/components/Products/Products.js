import React, { useState, useEffect } from 'react'
import axios from "axios"
import "./products.css"

function Products() {
  const [productItems, setProductItems] = useState([])
  const [statusNote, setStatusNote] = useState("")
  const url = 'https://fakerapi.it/api/v1/products?_quantity=15'

  useEffect(() => {
    axios.get(url)
    .then(response => {
      if(response.status === 200){
        setStatusNote("")
        setProductItems(response.data.data)
      }else{
        setStatusNote("Error while loading data, please refresh the page")
      }
    })

  }, [])

  return (
    <div className='products'>
      <h3>
        Products
      </h3>
      <p className='error'>
        {statusNote}
      </p>
      <div className='products_container'>
      <table className='product_table'>
              <tr className='product_table_tr'>
                <th>ID</th>
                <th className='product_th'>Product</th>
                <th className='product_th'>Net Price</th>
                <th className='product_th'>Taxes</th>
                <th className='product_th'>Price</th>
              </tr>
      {
        productItems ? productItems.map((productItem, id )=> (
          <tr key={id} className='product_table_tr table_item'>
          <td>{id+1}</td>
            <td className='products_card_image'>
              <img src={productItem.image} alt="product" />
              <span>{productItem.name}</span>
            </td>
            <td className='net_price'> &#8358;{productItem.net_price}</td>
            <td className='taxes'> &#8358;{ productItem.taxes} </td>
            <td className='price'> &#8358;{productItem.price}</td>  
        </tr>
  
        ) )
        : null
      }
      </table>
      </div>
    </div>
  )
}

export default Products