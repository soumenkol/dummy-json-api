import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice';
export default function Cart() {
    const products = useSelector(state => state.cart);
    const dispatch = useDispatch()
    const removeToCart = (id) =>{
        //dispatch a remove action
         dispatch(remove(id));
    }
    const cards = products.map(product =>(
        <div className="col-md-12" style={{marginBottom: '10px'}}>
             <Card key={product.id} className='h-100'>
                <div className="text-center">
                <Card.Img variant="top" src={product.image} style={{width: '100px', height: '130px'}} />
                </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
       INR: {product.price}
        </Card.Text>
        <Button  variant="danger"  onClick={() =>removeToCart(product.id)} >Remove Item</Button>
      </Card.Body>
    </Card>
        </div>
    ))

  return (
    <>
    <div className="row">
        {cards}
    </div>

    </>
  )
}
