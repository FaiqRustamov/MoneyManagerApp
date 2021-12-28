import './App.css';
import {Header,Product,Basket} from './components';
import {useState,useEffect} from 'react';
import products from './products.json'
function App() {
  const [money,setMoney]=useState(10000);
  const [basket,setBasket]=useState([]);
  const [total,setTotal]=useState(0);
  const resetBasket=()=>{
    setBasket([])
  }

  useEffect(()=>{
  setTotal(
    basket.reduce((acc,item)=>{
     return acc+(item.amount*(products.find(product=>product.id===item.id).price))
   },0),
   )
   
  },[basket])
  return (
    <div className="App">
    <Header total={total} money={money}/>
    <div className='container products'>
    {products.map(product=>(
      <Product total={total} money={money} key={product.id} basket={basket} setBasket={setBasket} product={product}/>
    ))}
    </div>

    {
      total >0 && (
        <Basket resetBasket={resetBasket} products={products} total={total}basket={basket}/>

      )
    }
    
    </div>
  );
}

export default App;
