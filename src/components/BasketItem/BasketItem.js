import React from 'react'
import './basketItem.css'
const BasketItem = ({item,product}) => {
    return (
     <li className='basket-item'>
         {product.title} x <span>{item.amount}</span>
     </li>
    )
}

export default BasketItem
