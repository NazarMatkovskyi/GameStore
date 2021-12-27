import React from 'react';
import { BiCartAlt } from 'react-icons/bi';
import './cart-block.css';

export const CartBlock = () => {
  return (
    <div className="cart-block">
      <BiCartAlt size={25} className='cart-block__icon' />
      <span className='card-block__total-price'>2354 uan.</span>
    </div>
  );
};
