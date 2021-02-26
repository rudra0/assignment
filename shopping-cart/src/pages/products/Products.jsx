import { Container } from '@material-ui/core';
import React from 'react';
import AppNavBar from '../../components/AppNavBar'
import ProductsList from './ProductsList'
import CartDrawer from './CartDrawer'

function Products(props) {
  const [openCart, setCartOpen] = React.useState(false)
  const [search, setSearch] = React.useState('')

  return (
    <Container>
      <AppNavBar 
        onClickCart={() => setCartOpen(true)} 
        onSearch={setSearch}
      />
      <ProductsList search={search} />
      <CartDrawer 
        isOpen={openCart}
        onClose={setCartOpen}
      />
    </Container>
  );
}

export default Products;