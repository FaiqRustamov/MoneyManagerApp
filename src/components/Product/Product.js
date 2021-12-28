import React from 'react'
import './product.css'
import { moneyFormat } from '../../Helper';

const Product = ({product,basket,setBasket,total,money}) => {

    const basketItem=basket.find(item=>item.id===product.id)

    const addBasket=()=>{
      const checkBasket=basket.find(item=>item.id===product.id)
      if(checkBasket){
        checkBasket.amount +=1
        setBasket([...basket.filter(item=>item.id!==product.id),checkBasket])
      }
      else{
          setBasket([...basket, {
                id:product.id,
                amount:1
          }])
      }
    }


    const removeBasket=()=>{
        const currentBasket=basket.find(item=>item.id===product.id)
        const basketWithoutCurrent=basket.filter(item=>item.id!==product.id)

          currentBasket.amount -=1
        
           if (currentBasket.amount===0){ 
                setBasket([...basketWithoutCurrent])
           }

           else{
          setBasket([...basketWithoutCurrent,currentBasket])
           }
        }
      

    

    return (
        <div className='product'>
          <img src={product.image} alt="product"/>
            <h5>{product.title}</h5>
            <div className='price'>
            {moneyFormat(product.price)} <span>AZN</span>
            </div>
            <div className='actions'>
                <button className='giveback-btn' disabled={!basketItem} onClick={removeBasket}>
                    Geri qaytar
                </button>
                <span className='amount'>{basketItem && basketItem.amount || 0}</span>
                <button className='buy-btn' disabled={total+product.price > money } onClick={addBasket}>
                    Al
                </button>
            </div>
        </div>
    )
}

export default Product
