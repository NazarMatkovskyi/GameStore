import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItemInCart, deleteItemFromCart  } from '../../redux/cart/reducer';
import { Button } from '../button';
import './game-buy.css';

export const GameBuy = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === game.id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
    }
  };


  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.price} uan.</span>
      <Button type={isItemInCart ? "secondary" : "primary"} 
      onClick={handleClick}>
        {isItemInCart ? 'Remove is cart' : 'Add to cart'}
      </Button>
    </div>
  );
};
