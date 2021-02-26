import { Grid } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, loadProducts } from '../../redux/actions';
import ProductCard from './ProductCard';

function has(arr, el){
  if(arr.find(item => item.id === el.id)) return true
  return false
}

function ProductsList({ search }) {
  const dispatch = useDispatch()

  const products = useSelector(store => store.products.products)
  const cartItems = useSelector(store => store.cart.items)

  React.useEffect(() => {
    dispatch(loadProducts())
  }, [])

  function getFilteredProducts(){
    if(search){
      return products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
    }
    return products
  }
  
  return (
    <Grid container spacing={3}>
      {
        getFilteredProducts()?.map((product, index) => (
          <Grid item xs={12} sm={6} md={4}>
            <ProductCard 
              key={index}
              product={product}
              onClick={() => dispatch(addToCart(product))}
              isAddedToCart={has(cartItems, product)}
            />
          </Grid>
        ))
      }
    </Grid>
  );
}

export default ProductsList;