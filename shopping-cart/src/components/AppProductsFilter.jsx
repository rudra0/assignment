import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
import { useDispatch, useSelector } from 'react-redux';
import { loadCategories, loadProducts } from '../redux/actions';

export default function AppProductsFilter() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const categories = useSelector(store => store.products.categories)
  const dispatch = useDispatch()

  const [selectedCategory, setSelectedCategory] = React.useState(null)

  React.useEffect(() => {
    dispatch(loadCategories())
  }, [])

  React.useEffect(() => {
    if(selectedCategory){
      dispatch(loadProducts(selectedCategory))
    }
  }, [selectedCategory])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (category) => () => {
    setSelectedCategory(category)
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton 
        aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <FilterListIcon />
        </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {
          categories?.map(category => (
            <MenuItem onClick={handleClose(category)} key={category} selected={category === selectedCategory}>
              {category}
            </MenuItem>
          ))
        }
      </Menu>
    </div>
  );
}
