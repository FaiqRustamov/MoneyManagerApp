import React from 'react'
import { BasketItem } from '..'
import './basket.css'
const Basket = ({basket,products,total,resetBasket}) => {
    return (
        <div className='basket-container container'>
        <h3>Çek hissesi</h3>
      <ul>
      {
            basket.map(item=>(
                <BasketItem key={item.id} item={item} product={products.find(p=>p.id===item.id)}/>
            ))}
      </ul> 
            
            
            <div className='total'>
                Ümumi:${total}
            </div>
            <button className='basket-reset-btn' onClick={resetBasket}>
          Sepeti temizle
    </button>
        </div>
   
    )
}

export default Basket
