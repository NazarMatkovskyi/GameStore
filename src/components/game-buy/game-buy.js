import React from 'react';
import { Button } from '../button';
import './game-buy.css';

export const GameBuy = ({ game }) => {
  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.price} uan.</span>
      <Button 
         type='primary'
        onClick={() => null}
      >
         Add to cart
         </Button>
    </div>
  );
};
