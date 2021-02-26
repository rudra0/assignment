import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default function ProductCard({product, isAddedToCart, onClick}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <img 
        src={product?.image} 
        className={classes.media}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h4">
          {product?.title}
        </Typography>
        <Typography variant="h6" color="textSecondary" component="p" style={{fontWeight: 700}}>
          Rs. {product?.price}
        </Typography>
      </CardContent>
      <Button 
        size="small" 
        color="primary" 
        variant="contained" 
        disableElevation 
        onClick={() => !isAddedToCart && onClick()}
        style={{minWidth: '90%', fontWeight: 700, color: '#fff', margin: 20, borderRadius: 0, background: isAddedToCart && '#1AAA00', cursor: isAddedToCart && 'not-allowed'}}>
        {
          isAddedToCart ? `✔ ADDED` : `Add to cart`
        }
      </Button>      
    </Card>
  );
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  media: {
    height: 140,
  },
});