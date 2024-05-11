import React,{useEffect,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';
export default function Products() {
    const dispatch = useDispatch();
    // const[products, setProduct] = useState([])
     const {data: products, status} = useSelector(state => state.products);
    useEffect(() =>{
          dispatch(getProducts());
    //    fetch('https://fakestoreapi.com/products')
    //    .then(data => data.json())
    //    .then(result =>setProduct(result))
    },[]);
    if(status ==='loading'){
        return <p>Loading....</p>
    }

    if(status ==='error'){
        return <p>Something went wrong! Try again later</p>
    }
    
    const addToCart = (product) =>{
       //dispatch add an action 
       dispatch(add(product))
    }
    const cards = products.map(product =>(
        <div className="col-md-3">
             <Card key={product.id} className='h-100'>
                <div className="text-center">
                <Card.Img variant="top" src={product.image} style={{width: '100px', height: '130px'}} />
                </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
       INR: {product.price}
        </Card.Text>
        <Button variant="primary" onClick={()=>addToCart(product)}>Add to Cart</Button>
      </Card.Body>
    </Card>
        </div>
    ))
  return (
    <><h1>Product Dashboard</h1>
           <div className="row">
            {cards}
           </div>
    </>
  )
}
